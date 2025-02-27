<script setup lang="ts">
const isOpen = ref(false)
const selected = ref([])
const drugOptions = [
  "Amlodipine",
  "Metformin",
  "Salbutamol",
  "Amoxicillin",
  "Sertraline",
  "Phenytoin",
  "Levothyroxine",
  "Methotrexate",
  "Atorvastatin",
  "Gabapentin",
]
const doseOptions = ["5mg", "10mg", "20mg", "40mg", "80mg", "120mg"]
const whenOptions = ["morning", "afternoon", "evening", "night"]
const frequencyOptions = ["2x2", "3x3", "4x4", "5x5", "6x6", "7x7"]
const durationOptions = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"]

const newDrug = ref({
  name: "",
  dose: "",
  when: "",
  frequency: "",
  duration: "",
  notes: "",
})

const addNewDrug = () => {
  drugs.value.push({ ...newDrug.value })
  newDrug.value = {
    name: "",
    dose: "",
    when: "",
    frequency: "",
    duration: "",
    notes: "",
  }
}

const drugs = ref([
  {
    name: "Amlodipine",
    dose: "100mg",
    when: "morning",
    frequency: "1x1",
    duration: "3 days",
    notes: "Take with food to avoid nausea.",
  },
  {
    name: "Metformin",
    dose: "50mg",
    when: "night",
    frequency: "2x2",
    duration: "60 days",
    notes: "Monitor blood sugar levels regularly.",
  },
])

const header = [
  { label: "#", key: "n" },
  { label: "Name", key: "name" },
  { label: "Dose", key: "dose" },
  { label: "When", key: "when" },
  { label: "Frequency", key: "frequency" },
  { label: "Duration", key: "duration" },
]
</script>

<template>
  <UContainer class="mt-4">
    <!-- Table -->

    <!-- <thead>
        <tr>
          <th>#</th>
          <th>Name</th>
          <th>Dose</th>
          <th>When</th>
          <th>Frequency</th>
          <th>Duration</th>
        </tr>
      </thead> -->
    <div v-for="(drug, index) in drugs" :key="index" class="drug-item">
      <table class="u-table">
        <tbody>
          <tr>
            <td class="column">{{ index + 1 }}</td>
            <td class="column">{{ drug.name }}</td>
            <td class="column">{{ drug.dose }}</td>
            <td class="column">{{ drug.when }}</td>
            <td class="column">{{ drug.frequency }}</td>
            <td class="column">{{ drug.duration }}</td>
          </tr>
          <tr>
            <td colspan="6" class="notes-row">Notes: {{ drug.notes }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </UContainer>
  <UDivider class="my-10" />
  <UContainer class="donot">
    <!-- Add New Drug Form -->
    <UFormGroup label="New Drug">
      <div class="flex mb-4">
        <div class="mr-2">
          <UInputMenu
            placeholder="Name"
            v-model="newDrug.name"
            :options="drugOptions"
          />
        </div>
        <div class="mr-2">
          <UInputMenu
            placeholder="Dose"
            v-model="newDrug.dose"
            :options="doseOptions"
          />
        </div>
        <div class="mr-2">
          <UInputMenu
            placeholder="When"
            v-model="newDrug.when"
            :options="whenOptions"
          />
        </div>
        <div class="mr-2">
          <UInputMenu
            placeholder="Frequency"
            v-model="newDrug.frequency"
            :options="frequencyOptions"
          />
        </div>
        <div class="mr-2">
          <UInputMenu
            placeholder="Duration"
            v-model="newDrug.duration"
            :options="durationOptions"
          />
        </div>
      </div>
      <div class="mb-4">
        <UTextarea placeholder="Notes" v-model="newDrug.notes" />
      </div>
      <div>
        <UButton
          class="w-auto"
          label="Add"
          color="primary"
          @click="addNewDrug"
        />
      </div>
    </UFormGroup>
    <UDivider class="my-4" />
  </UContainer>
</template>

<style scoped>
.u-table {
  width: 100%;
  border-collapse: collapse;
  table-layout: fixed; /* Ensures uniform column sizes */
}

.u-table .column {
  width: 16.6%; /* Equal width for 6 columns */
  padding: 8px;
  border: 1px solid #ccc;
  text-align: left;
}

.notes-row {
  padding: 8px;
  border: 1px solid #ccc;
  background-color: #f9f9f9;
  text-align: left;
}

@media print {
  .donot {
    display: none;
  }
}
</style>
