<template>
  <UContainer>
    <!-- table -->
    <div class="mt-8 flow-root">
      <div class="-mx-4 -my-2 sm:-mx-6 lg:-mx-8">
        <div class="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
          <div class="shadow ring-1 ring-black ring-opacity-5 sm:rounded-lg">
            <table class="min-w-full divide-y divide-gray-300 header-table">
              <thead class="bg-gray-50">
                <tr>
                  <th
                    v-for="item in header"
                    scope="col"
                    class="whitespace-nowrap py-4 pl-2 pr-3 text-sm font-medium text-gray-900"
                  >
                    {{ item }}
                  </th>
                </tr>
              </thead>
            </table>
            <div v-for="(drug, id) in drugs" :key="drug.name">
              <table class="min-w-full divide-y divide-gray-300 row-table">
                <tbody class="divide-y divide-gray-200 bg-white mainTable">
                  <tr>
                    <td
                      class="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6"
                    >
                      {{ id + 1 }}
                    </td>
                    <td
                      class="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6"
                    >
                      <span>{{ drug.name }}</span>
                    </td>
                    <td
                      class="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6"
                    >
                      <span>{{ drug.dose }}</span>
                    </td>
                    <td
                      class="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6"
                    >
                      <span>{{ drug.when }}</span>
                    </td>
                    <td
                      class="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6"
                    >
                      <span>{{ drug.frequency }}</span>
                    </td>
                    <td
                      class="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6"
                    >
                      <span>{{ drug.duration }}</span>
                    </td>
                  </tr>
                  <tr>
                    <td colspan="6" class="notes-row p-4">
                      {{ drug.notes }}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  </UContainer>

  <!-- divider -->
  <UDivider class="my-10" />

  <!-- form -->
  <UContainer class="print">
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

<script setup>
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
const quantityOptions = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"]

const newDrug = ref({
  name: "",
  dose: "",
  when: "",
  frequency: "",
  duration: "",
  notes: "",
})

const addNewDrug = () => {
  drugs.value.push(newDrug.value)
  newDrug.value = {
    name: "",
    dose: "",
    when: "",
    frequency: "",
    duration: "",
    notes: "",
  }
  console.log(drugs)
}

const drugs = ref([
  {
    id: 1,
    name: "Amlodipine",
    dose: "100mg",
    when: "morning",
    frequency: "1x1",
    duration: "3 days",
    notes:
      "This is a star-sized column. The next column over, an auto-sized column, will not wrap to accomodate all the text in this cell, because it has been given the noWrap style",
  },
  {
    id: 2,
    name: "Metformin",
    dose: "50mg",
    when: "night",
    frequency: "2x2",
    duration: "60 days",
    notes:
      "This is a star-sized column. The next column over, an auto-sized column, will not wrap to accomodate all the text in this cell, because it has been given the noWrap style",
  },
])
const header = ["#", "Name", "Dose", "When", "Frequency", "Duration"]

const dDrugs = [
  {
    id: 1,
    name: "Gabapentin",
    dose: ["100mg", "300mg", "600mg"],
    when: ["once a day", "twice a day", "three times a day"],
    frequency: ["1x1", "2x2", "3x3"],
    duration: ["1 day", "2 days", "3 days"],
    notes: [
      "كبسولة واحدة ليلا قبل النوم",
      "كبسولة واحدة ليلا قبل النوم",
      "كبسولة واحدة ليلا قبل النوم",
    ],
  },
]
</script>

<style>
/* Ensure consistent column widths */
.header-table th,
.row-table td {
  width: 14.28%; /* Divide 100% by 7 columns for equal spacing */
  text-align: left;
}

.header-table th:first-child,
.row-table td:first-child {
  width: 5%; /* Adjust width for the first column */
  text-align: left;
}

/* Optional styling for better visuals */
.header-table th {
  background-color: #f9fafb;
}

.row-table td {
  padding: 8px;
}

@media print {
  .print {
    display: none;
  }
}
</style>
