<template>
  <div>
    <input type="file" @change="handleFileUpload" accept=".csv" />
    <UButton @click="uploadData" :disabled="!file">Upload</UButton>
    <p v-if="uploadStatus">{{ uploadStatus }}</p>
  </div>
</template>

<script setup>
import PocketBase from "pocketbase"

const pb = new PocketBase("https://mcq-db.dakakean.com")
pb.autoCancellation(false)

import Papa from "papaparse" // Install: npm install papaparse

const file = ref(null)
const uploadStatus = ref("")

const handleFileUpload = (event) => {
  file.value = event.target.files[0]
}

const deleteData = async () => {}

const uploadData = async () => {
  if (!file.value) {
    return
  }

  uploadStatus.value = "Uploading..."

  Papa.parse(file.value, {
    header: true,
    complete: async (results) => {
      try {
        const data = results.data.filter(
          (row) =>
            row.DDInterID_A &&
            row.Drug_A &&
            row.DDInterID_B &&
            row.Drug_B &&
            row.Level
        )

        const batchSize = 400
        for (let i = 0; i < data.length; i += batchSize) {
          const batch = data.slice(i, i + batchSize)
          const promises = batch.map((row) =>
            pb
              .collection("interactions")
              .create(row, { requestKey: row.DDInterID_A + row.DDInterID_B })
          )
          await Promise.all(promises)
        }

        uploadStatus.value = "Upload successful!"
      } catch (error) {
        console.error("Upload error:", error)
        uploadStatus.value = `Upload failed: ${error.message}`
      }
    },
    error: (error) => {
      console.error("CSV parsing error:", error)
      uploadStatus.value = `CSV parsing error: ${error.message}`
    },
  })
}
</script>
