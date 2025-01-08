<script setup>
import PocketBase from "pocketbase"

// PocketBase initialization
const pb = new PocketBase("https://mcq-db.dakakean.com")

// Reactive state
const selected = ref([])
const form = ref({
  id: "",
  brand: "",
  name: "",
  frequency: "",
  dose: "",
  when: "",
  duration: "",
  note: "",
})
const drugs = ref([])
const editing = ref(false)
const isSubmitting = ref(false)
const errorMessage = ref("")

// Helper functions
const resetForm = () => {
  form.value = {
    id: "",
    brand: "",
    name: "",
    frequency: "",
    dose: "",
    when: "",
    duration: "",
    note: "",
  }
  editing.value = false
  selected.value = []
}

const parseMultilineInput = (input) =>
  input.split("\n").filter((line) => line.trim() !== "")

const fetchDrugs = async () => {
  try {
    const records = await pb.collection("drugs").getFullList()
    drugs.value = records.map((drug) => ({
      id: drug.id || "",
      name: drug.name || "",
      brand: drug.brand || "",
      frequency: drug.frequency.join(", ") || "",
      dose: drug.dose.join(", ") || "",
      when: drug.when.join(", ") || "",
      duration: drug.duration.join(", ") || "",
      note: drug.note || "",
    }))
  } catch (error) {
    console.error("Error fetching drugs:", error)
  }
}

const createOrUpdateDrug = async () => {
  isSubmitting.value = true
  errorMessage.value = ""

  const data = {
    name: form.value.name,
    brand: form.value.brand,
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

const handleTableChange = (row) => {
  if (selected.value.length === 1) {
    editing.value = false
    resetForm()
  } else {
    editing.value = true
    form.value = {
      id: row.id || "",
      name: row.name || "",
      brand: row.brand || "",
      frequency: row.frequency || "",
      dose: row.dose || "",
      when: row.when || "",
      duration: row.duration || "",
      note: row.note || "",
    }
  }
}

onMounted(fetchDrugs)
</script>

<template>
  <UContainer class="my-10">
    <h1 class="text-xl font-semibold mb-4">
      {{ editing ? "Edit Drug" : "Add New Drug" }}
    </h1>

    <form @submit.prevent="createOrUpdateDrug">
      <div
        v-for="(label, key) in {
          name: 'Drug Name',
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
        <label :for="key" class="block text-sm font-medium text-gray-700">{{
          label
        }}</label>
        <textarea
          v-if="key !== 'name'"
          v-model="form[key]"
          :id="key"
          class="textarea"
          :placeholder="`Enter ${label.toLowerCase()} (one per line)`"
        ></textarea>
        <input
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

      <button type="submit" class="btn btn-primary" :disabled="isSubmitting">
        {{
          isSubmitting
            ? "Submitting..."
            : editing
            ? "Update Drug"
            : "Create Drug"
        }}
      </button>
    </form>
  </UContainer>

  <UDivider class="my-10" />

  <UContainer class="my-10">
    <UTable
      v-model="selected"
      :rows="drugs"
      class="w-full"
      :single-select="true"
      @select="handleTableChange"
    />
  </UContainer>
</template>

<style scoped>
.input,
.textarea {
  width: 100%;
  padding: 0.5rem;
  border: 1px solid #d1d5db;
  border-radius: 0.375rem;
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
