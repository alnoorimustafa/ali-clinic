<script setup>
import PocketBase from "pocketbase"

// PocketBase initialization
const pb = new PocketBase("https://mcq-db.dakakean.com")

// Reactive state
const selected = ref([])
const form = ref({
  id: null,
  brand: null,
  name: null,
  frequency: null,
  dose: null,
  when: null,
  duration: null,
  note: null,
})
const drugs = ref([])
const editing = ref(false)
const isSubmitting = ref(false)
const errorMessage = ref("")

// Helper functions
const resetForm = () => {
  form.value = {
    id: null,
    brand: null,
    name: null,
    frequency: null,
    dose: null,
    when: null,
    duration: null,
    note: null,
  }
  editing.value = false
  selected.value = []
}

const parseMultilineInput = (input) => {
  if (!input) {
    return ""
  } else {
    return input.split("\n").filter((line) => line.trim() !== "")
  }
}

const fetchDrugs = async () => {
  try {
    const records = await pb.collection("drugs").getFullList()
    drugs.value = records.map((drug) => ({
      id: drug.id || "",
      name: drug.name || "",
      brand: drug.brand || "",
      frequency: drug.frequency || "",
      dose: drug.dose || "",
      when: drug.when || "",
      duration: drug.duration || "",
      note: drug.note || "",
    }))
  } catch (error) {
    console.error("Error fetching drugs:", error)
  }
}

const createOrUpdateDrug = async () => {
  isSubmitting.value = true
  errorMessage.value = ""

  console.log(form.value)

  const data = {
    name: form.value.name,
    brand: parseMultilineInput(form.value.brand),
    frequency: parseMultilineInput(form.value.frequency),
    dose: parseMultilineInput(form.value.dose),
    when: parseMultilineInput(form.value.when),
    duration: parseMultilineInput(form.value.duration),
    note: form.value.note,
  }

  try {
    if (editing.value) {
      await pb.collection("drugs").update(form.value.id, data)
      console.log("Drug updated successfully.")
    } else {
      await pb.collection("drugs").create(data)
      console.log("Drug created successfully.")
    }
    resetForm()
    fetchDrugs()
  } catch (error) {
    console.error("Error saving drug:", error)
    errorMessage.value = error.message || "Failed to save drug."
  } finally {
    isSubmitting.value = false
  }
}

const formatRowValue = (value) => {
  if (!value) return "" // Handle empty or undefined values

  if (Array.isArray(value)) {
    // If it's an array, join elements with a newline
    return value.map((item) => item.trim()).join("\n")
  }

  if (typeof value === "string") {
    // Handle strings: split by comma if present, else return trimmed value
    return value.includes(",")
      ? value
          .split(",")
          .map((item) => item.trim())
          .join("\n")
      : value.trim()
  }

  // For unexpected types, return as a string
  return String(value)
}
// const handleTableChange = (row) => {
//   console.log(row)

//   if (selected.value.length === 1) {
//     editing.value = false
//     resetForm()
//   } else {
//     editing.value = true
//     form.value = {
//       id: row.id || "",
//       name: row.name || "",
//       brand: row.brand || "",
//       frequency: row.frequency || "",
//       dose: row.dose || "",
//       when: row.when || "",
//       duration: row.duration || "",
//       note: row.note || "",
//     }
//   }
// }

const handleTableChange = (row) => {
  console.log(row)

  if (selected.value.length === 1) {
    editing.value = false
    resetForm()
  } else {
    editing.value = true
    form.value = {
      id: row.id || "",
      name: formatRowValue(row.name),
      brand: formatRowValue(row.brand),
      frequency: formatRowValue(row.frequency),
      dose: formatRowValue(row.dose),
      when: formatRowValue(row.when),
      duration: formatRowValue(row.duration),
      note: formatRowValue(row.note),
    }
  }
}

onMounted(fetchDrugs)
</script>

<template>
  <UContainer class="my-10">
    <div class="my-10">
      <UButton to="/">back</UButton>
    </div>
    <div class="grid grid-cols-3 gap-6">
      <div class="col-span-1 max-w-lg">
        <h1 class="text-xl font-semibold mb-4">
          {{ editing ? "Edit Drug" : "Add New Drug" }}
        </h1>

        <form @submit.prevent="createOrUpdateDrug">
          <div
            v-for="(label, key) in {
              name: 'Name',
              brand: 'Brand',
              frequency: 'Frequency',
              dose: 'Dose',
              when: 'When to Take',
              duration: 'Duration',
              note: 'Note',
            }"
            :key="key"
            class="form-group mb-4"
          >
            <label
              :for="key"
              class="block mb-2 text-sm font-medium text-gray-700"
              >{{ label }}</label
            >
            <UTextarea
              autoresize
              v-if="key !== 'name'"
              v-model="form[key]"
              :id="key"
              class="textarea"
              :placeholder="`Enter ${label.toLowerCase()} (one per line)`"
            />
            <UInput
              v-else
              v-model="form[key]"
              :id="key"
              type="text"
              class="input"
              :placeholder="`Enter ${label.toLowerCase()}`"
              required
            />
          </div>

          <div v-if="errorMessage" class="text-red-500 mb-4">
            {{ errorMessage }}
          </div>

          <button
            type="submit"
            class="btn btn-primary"
            :disabled="isSubmitting"
          >
            {{
              isSubmitting
                ? "Submitting..."
                : editing
                ? "Update Drug"
                : "Create Drug"
            }}
          </button>
        </form>
      </div>
      <div class="col-span-2">
        <UTable
          v-model="selected"
          :rows="drugs"
          class="w-full border rounded"
          :single-select="true"
          @select="handleTableChange"
        />
      </div>
    </div>
  </UContainer>
</template>

<style scoped>
.btn {
  background-color: #2563eb;
  color: #fff;
  padding: 0.5rem 1rem;
  border-radius: 0.375rem;
}
.btn:disabled {
  background-color: #d1d5db;
}
</style>
