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

import Papa from "papaparse" // Install: npm install papaparse

const file = ref(null)
const uploadStatus = ref("")

const handleFileUpload = (event) => {
  file.value = event.target.files[0]
}

const uploadData = async () => {
  if (!file.value) {
    return
  }

  uploadStatus.value = "Uploading..."

  Papa.parse(file.value, {
    header: true,
    complete: async (results) => {
      try {
        for (const row of results.data) {
          if (
            row.DDInterID_A &&
            row.Drug_A &&
            row.DDInterID_B &&
            row.Drug_B &&
            row.Level
          ) {
            await pb.collection("drug_interactions").create(row)
          } else {
            console.warn("Skipping row with missing data:", row)
          }
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
