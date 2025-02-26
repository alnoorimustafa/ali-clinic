<script setup>
import PocketBase from "pocketbase"

// PocketBase initialization
const pb = new PocketBase("https://mcq-db.dakakean.com")

// Reactive state
const selected = ref([])
const columns = ref([
  {
    label: "id",
  },
  {
    label: "Icon",
    key: "icon",
  },
  {
    label: "Name",
    key: "name",
  },
  {
    label: "Brand",
    key: "brand",
  },
  {
    label: "Frequency",
    key: "frequency",
  },
  {
    label: "Dose",
    key: "dose",
  },
  {
    label: "When",
    key: "when",
  },
  {
    label: "Duration",
    key: "duration",
  },
  {
    label: "Note",
    key: "note",
  },
])
const form = ref({
  icon: "",
  id: null,
  name: null,
  brand: null,
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

import { useDrugStore } from "../composables/useDrugStore"

const { drugList } = useDrugStore()

// Helper functions
const resetForm = () => {
  form.value = {
    icon: null,
    id: null,
    brand: null,
    name: null,
    frequency: null,
    dose: null,
    when: null,
    duration: null,
    note: null,
    hidden: null,
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
    const records = await pb.collection("drugs").getFullList({
      sort: "name",
    })
    drugList.value = records
    drugs.value = records.map((drug) => ({
      id: drug.id || "",
      name: drug.name || "",
      icon: drug.icon || "",
      brand: drug.brand || "",
      frequency: drug.frequency || "",
      dose: drug.dose || "",
      when: drug.when || "",
      duration: drug.duration || "",
      note: drug.note || "",
      hidden: drug.hidden || "",
    }))
  } catch (error) {
    console.error("Error fetching drugs:", error)
  }
}

const createOrUpdateDrug = async () => {
  isSubmitting.value = true
  errorMessage.value = ""

  const data = {
    icon: form.value.icon,
    name: form.value.name,
    brand: parseMultilineInput(form.value.brand),
    frequency: parseMultilineInput(form.value.frequency),
    dose: parseMultilineInput(form.value.dose),
    when: parseMultilineInput(form.value.when),
    duration: parseMultilineInput(form.value.duration),
    note: parseMultilineInput(form.value.note),
    hidden: parseMultilineInput(form.value.hidden),
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

  return String(value)
}

const handleTableChange = (row) => {
  console.log(row)

  if (selected.value.length === 1) {
    editing.value = false
    resetForm()
  } else {
    editing.value = true
    form.value = {
      id: row.id || "",
      icon: row.icon || "",
      name: formatRowValue(row.name),
      brand: formatRowValue(row.brand),
      frequency: formatRowValue(row.frequency),
      dose: formatRowValue(row.dose),
      when: formatRowValue(row.when),
      duration: formatRowValue(row.duration),
      note: formatRowValue(row.note),
      hidden: formatRowValue(row.hidden),
    }
  }
}

const deleteDrug = async () => {
  try {
    await pb.collection("drugs").delete(form.value.id)
    fetchDrugs()
    resetForm()
  } catch (error) {
    console.error("Error deleting drug:", error)
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
      <div class="col-span-1 max-w-lg sticky-form">
        <h1 class="text-xl font-semibold mb-4">
          {{ editing ? "Edit Drug" : "Add New Drug" }}
        </h1>

        <div
          v-for="(label, key) in {
            icon: 'Icon',
            name: 'Name',
            brand: 'Brand',
            frequency: 'Frequency',
            dose: 'Dose',
            when: 'When to Take',
            duration: 'Duration',
            note: 'Note',
            hidden: 'Hidden Note',
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
            :required="false"
            autoresize
            v-if="key !== 'name' && key !== 'icon'"
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

        <UButton
          type="submit"
          class="bg-primary mr-4"
          :disabled="isSubmitting"
          @click="createOrUpdateDrug"
        >
          {{
            isSubmitting
              ? "Submitting..."
              : editing
              ? "Update Drug"
              : "Create Drug"
          }}
        </UButton>
        <UButton
          v-if="editing"
          type="submit"
          class="bg-red-700"
          :disabled="isSubmitting"
          @click="deleteDrug"
        >
          Delete Drug
        </UButton>
      </div>
      <div class="col-span-2">
        <p class="text-sm text-gray-500 mb-2">{{ drugs.length }} drugs</p>
        <UTable
          v-model="selected"
          :rows="drugs"
          :columns="columns"
          class="w-full border rounded"
          :single-select="true"
          @select="handleTableChange"
        >
          <template #name-data="{ row }">
            <span
              :class="[
                selected.find((drug) => drug.id === row.id) &&
                  'text-primary-500 dark:text-primary-400',
              ]"
              >{{ row.name }}</span
            >
          </template>
        </UTable>
      </div>
    </div>
  </UContainer>
</template>

<style scoped>
.sticky-form {
  position: sticky;
  top: 1rem; /* Adjust to control the distance from the top */
  max-width: 100%; /* Ensures it stays responsive */
  background-color: #fff; /* Optional: ensures the background is visible */
  padding: 1rem; /* Optional: adds padding for better appearance */
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); /* Optional: adds a subtle shadow */
  z-index: 10; /* Keeps it above other elements */
}

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
