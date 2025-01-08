<script setup>
import PocketBase from "pocketbase"
const pb = new PocketBase("https://mcq-db.dakakean.com")

const drugName = ref("")
const frequency = ref("")
const dose = ref("")
const whenToTake = ref("")
const duration = ref("")
const note = ref("")
const isSubmitting = ref(false)
const errorMessage = ref("")
const drugs = ref([])

const createDrug = async () => {
  isSubmitting.value = true
  errorMessage.value = ""
  try {
    const data = {
      name: drugName.value,
      frequency: frequency.value,
      dose: dose.value,
      when: whenToTake.value,
      duration: duration.value,
      note: note.value,
    }

    const record = await pb.collection("drugs").create(data)

    console.log("Drug created successfully:", record)
    resetForm()
  } catch (error) {
    console.error("Error creating drug:", error)
    errorMessage.value = error.message || "Failed to create drug."
  } finally {
    isSubmitting.value = false
  }
}

const resetForm = () => {
  drugName.value = ""
  frequency.value = ""
  dose.value = ""
  whenToTake.value = ""
  duration.value = ""
  note.value = ""
}

const fetchDrugs = async () => {
  const records = await pb.collection("drugs").getFullList({})
  console.log(records)
  drugs.value = records
}

onMounted(async () => {
  await fetchDrugs()
})
</script>

<template>
  <div class="form-container p-4 max-w-md mx-auto bg-white rounded shadow-md">
    <h1 class="text-xl font-semibold mb-4">Add New Drug</h1>

    <form @submit.prevent="createDrug">
      <div class="form-group mb-4">
        <label for="name" class="block text-sm font-medium text-gray-700"
          >Drug Name</label
        >
        <input
          v-model="drugName"
          id="name"
          type="text"
          class="input"
          placeholder="Enter drug name"
          required
        />
      </div>

      <div class="form-group mb-4">
        <label for="frequency" class="block text-sm font-medium text-gray-700"
          >Frequency</label
        >
        <input
          v-model="frequency"
          id="frequency"
          type="text"
          class="input"
          placeholder="Enter frequency"
          required
        />
      </div>

      <div class="form-group mb-4">
        <label for="dose" class="block text-sm font-medium text-gray-700"
          >Dose</label
        >
        <input
          v-model="dose"
          id="dose"
          type="text"
          class="input"
          placeholder="Enter dose"
          required
        />
      </div>

      <div class="form-group mb-4">
        <label for="when" class="block text-sm font-medium text-gray-700"
          >When to Take</label
        >
        <input
          v-model="whenToTake"
          id="when"
          type="text"
          class="input"
          placeholder="Enter when to take"
          required
        />
      </div>

      <div class="form-group mb-4">
        <label for="duration" class="block text-sm font-medium text-gray-700"
          >Duration</label
        >
        <input
          v-model="duration"
          id="duration"
          type="text"
          class="input"
          placeholder="Enter duration"
          required
        />
      </div>

      <div class="form-group mb-4">
        <label for="note" class="block text-sm font-medium text-gray-700"
          >Note</label
        >
        <textarea
          v-model="note"
          id="note"
          class="textarea"
          placeholder="Enter any notes"
        ></textarea>
      </div>

      <div v-if="errorMessage" class="text-red-500 mb-4">
        {{ errorMessage }}
      </div>

      <div class="form-group">
        <button type="submit" class="btn btn-primary" :disabled="isSubmitting">
          {{ isSubmitting ? "Submitting..." : "Create Drug" }}
        </button>
      </div>
    </form>
    <div v-for="drug in drugs" :key="drug.id">
      {{ drug.name }}
      {{ drug.frequency }}
      {{ drug.dose }}
      {{ drug.when }}
      {{ drug.duration }}
      {{ drug.note }}
    </div>
  </div>
</template>

<style scoped>
.form-container {
  background-color: #f9fafb;
}
.input {
  width: 100%;
  padding: 0.5rem;
  border: 1px solid #d1d5db;
  border-radius: 0.375rem;
}
.textarea {
  width: 100%;
  padding: 0.5rem;
  border: 1px solid #d1d5db;
  border-radius: 0.375rem;
}
.btn {
  display: inline-block;
  background-color: #2563eb;
  color: #fff;
  padding: 0.5rem 1rem;
  border-radius: 0.375rem;
  text-align: center;
}
.btn:disabled {
  background-color: #d1d5db;
}
</style>
