<script setup>
import PocketBase from "pocketbase"
const pb = new PocketBase("https://mcq-db.dakakean.com")

const selected = ref([])
const drugId = ref("")
const drugName = ref("")
const frequency = ref("")
const dose = ref("")
const whenToTake = ref("")
const duration = ref("")
const note = ref("")
const isSubmitting = ref(false)
const errorMessage = ref("")
const drugs = ref([])
const editing = ref(false)

const createDrug = async () => {
  if (editing.value) {
    console.log("Editing drug")

    const data = {
      name: drugName.value,
      frequency: frequency.value
        .split("\n")
        .filter((line) => line.trim() !== ""), // Split by new lines for frequency
      dose: dose.value.split("\n").filter((line) => line.trim() !== ""), // Split by new lines for dose
      when: whenToTake.value.split("\n").filter((line) => line.trim() !== ""), // Split by new lines for when
      duration: duration.value.split("\n").filter((line) => line.trim() !== ""), // Split by new lines for duration
      note: note.value,
    }

    const record = await pb.collection("drugs").update(drugId.value, data)

    editing.value = false
    resetForm()
    fetchDrugs()
  } else {
    console.log("creating drug")
    isSubmitting.value = true
    errorMessage.value = ""
    try {
      const data = {
        name: drugName.value,
        frequency: frequency.value
          .split("\n")
          .filter((line) => line.trim() !== ""), // Split by new lines for frequency
        dose: dose.value.split("\n").filter((line) => line.trim() !== ""), // Split by new lines for dose
        when: whenToTake.value.split("\n").filter((line) => line.trim() !== ""), // Split by new lines for when
        duration: duration.value
          .split("\n")
          .filter((line) => line.trim() !== ""), // Split by new lines for duration
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
      fetchDrugs()
    }
  }
}

const resetForm = () => {
  drugName.value = ""
  frequency.value = ""
  dose.value = ""
  whenToTake.value = ""
  duration.value = ""
  note.value = ""
  drugId.value = ""
}

const fetchDrugs = async () => {
  const records = await pb.collection("drugs").getFullList({})
  console.log(records)
  drugs.value = records.map((drug, i) => ({
    Id: drug.id,
    name: drug.name,
    dose: drug.dose.join(", "),
    when: drug.when.join(", "),
    frequency: drug.frequency.join(", "),
    duration: drug.duration.join(", "),
    notes: drug.notes,
  }))
}

function select(row) {
  editing.value = true
  const index = selected.value.findIndex((item) => item.id === row.id)
  if (index === -1) {
    selected.value.push(row)
    drugId.value = row.Id
    drugName.value = row.name
    frequency.value = row.frequency
    dose.value = row.dose
    whenToTake.value = row.when
    duration.value = row.duration
    note.value = row.notes
  } else {
    selected.value.splice(index, 1)
  }
}

onMounted(async () => {
  await fetchDrugs()
})
</script>

<template>
  <UContainer class="my-10">
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
        <textarea
          v-model="frequency"
          id="frequency"
          class="textarea"
          placeholder="Enter frequency (one per line)"
          required
        ></textarea>
      </div>

      <div class="form-group mb-4">
        <label for="dose" class="block text-sm font-medium text-gray-700"
          >Dose</label
        >
        <textarea
          v-model="dose"
          id="dose"
          class="textarea"
          placeholder="Enter dose (one per line)"
          required
        ></textarea>
      </div>

      <div class="form-group mb-4">
        <label for="when" class="block text-sm font-medium text-gray-700"
          >When to Take</label
        >
        <textarea
          v-model="whenToTake"
          id="when"
          class="textarea"
          placeholder="Enter when to take (one per line)"
          required
        ></textarea>
      </div>

      <div class="form-group mb-4">
        <label for="duration" class="block text-sm font-medium text-gray-700"
          >Duration</label
        >
        <textarea
          v-model="duration"
          id="duration"
          class="textarea"
          placeholder="Enter duration (one per line)"
          required
        ></textarea>
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
          {{
            isSubmitting
              ? "Submitting..."
              : editing
              ? "Edit Drug"
              : "Create Drug"
          }}
        </button>
      </div>
    </form>
  </UContainer>
  <UDivider class="my-10" />
  <UContainer class="my-10">
    <div
      class="border rounded border-gray-200 dark:border-gray-700 border-collapse"
    >
      <UTable
        v-model="selected"
        :rows="[...drugs]"
        class="w-full"
        :single-select="true"
        @select="select"
        @change="
          () => {
            if (selected.length === 0) {
              editing = false
              resetForm()
            }
          }
        "
      />
    </div>
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
