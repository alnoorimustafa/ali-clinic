<template>
  <UButton @click="generatePrescription">Generate Prescription</UButton>
</template>

<script setup>
import pdfMake from "pdfmake/build/pdfmake"
import pdfFonts from "pdfmake/build/vfs_fonts"

const props = defineProps({
  prescription: {
    type: Object,
    required: true,
  },
})

console.log(props.prescription)

async function imageToBase64(url) {
  const response = await fetch(url)
  const blob = await response.blob()
  return new Promise((resolve) => {
    const reader = new FileReader()
    reader.onloadend = () => resolve(reader.result)
    reader.readAsDataURL(blob)
  })
}

const generatePrescription = async () => {
  const imageUrl =
    "https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg"
  const base64Image = await imageToBase64(imageUrl)

  const content = ref([])

  for (let index = 0; index < props.prescription.length; index++) {
    content.value.push([
      index + 1,
      props.prescription[index].name || "",
      props.prescription[index].dose || "",
      props.prescription[index].when || "",
      props.prescription[index].frequency || "",
      props.prescription[index].duration || "",
      props.prescription[index].quantity || "",
      props.prescription[index].notes || "",
    ])
  }

  // Define the document with text overlaying the image
  const docDefinition = {
    pageSize: "A4",
    pageMargins: [20, 100, 20, 100],
    content: [
      {
        style: "treatment",
        table: {
          widths: ["auto", "*", "*", "*", "*", "*", "*", "*"],
          body: [
            [
              "#",
              "Name",
              "Dose",
              "When",
              "Frequency",
              "Duration",
              "Quantity",
              "Notes",
            ],
            ...content.value,
          ],
        },
      },
    ],
  }

  // Generate and download the PDF
  pdfMake.createPdf(docDefinition).download("prescription.pdf")
}
</script>
