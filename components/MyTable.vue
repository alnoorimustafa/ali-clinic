<template>
  <div class="px-4 sm:px-6 lg:px-8 mt-10">
    <!-- header  -->
    <div class="sm:flex sm:items-center">
      <!-- title and description -->
      <div class="sm:flex-auto">
        <h1 class="text-base font-semibold leading-6 text-white">Users</h1>
        <p class="mt-2 text-sm text-gray-200">
          A list of all drugs for this patient.
        </p>
      </div>
      <!-- add user -->
      <div class="mt-4 sm:ml-16 sm:mt-0 sm:flex-none">
        <button
          @click="isOpen = true"
          type="button"
          class="block rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Add user
        </button>
      </div>
    </div>
    <!-- table -->
    <div class="mt-8 flow-root">
      <div class="-mx-4 -my-2 sm:-mx-6 lg:-mx-8">
        <div class="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
          <div class="shadow ring-1 ring-black ring-opacity-5 sm:rounded-lg">
            <table class="min-w-full divide-y divide-gray-300">
              <thead class="bg-gray-50">
                <tr>
                  <th
                    v-once
                    v-for="item in header"
                    scope="col"
                    class="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6 border"
                  >
                    {{ item }}
                  </th>
                </tr>
              </thead>
            </table>
            <div v-for="(drug, id) in drugs" :key="drug.name">
              <table class="min-w-full divide-y divide-gray-300">
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
                      <span>
                        {{ drug.name }}
                      </span>
                    </td>
                    <td
                      class="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6 bg-slate-600"
                    >
                      <span>
                        {{ drug.dose }}
                      </span>
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
                    <td
                      class="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6"
                    >
                      <span>{{ drug.quantity }}</span>
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
  </div>
  <div class="container flex flex-col items-center justify-center">
    <UFormGroup label="New Drug">
      <UInputMenu class="mb-2" v-model="newDrug.name" :options="drugOptions" />
      <UInputMenu class="mb-2" v-model="newDrug.dose" :options="doseOptions" />
      <UInputMenu class="mb-2" v-model="newDrug.when" :options="whenOptions" />
      <UInputMenu
        class="mb-2"
        v-model="newDrug.frequency"
        :options="frequencyOptions"
      />
      <UInputMenu
        class="mb-2"
        v-model="newDrug.duration"
        :options="durationOptions"
      />
      <UInputMenu
        class="mb-2"
        v-model="newDrug.quantity"
        :options="quantityOptions"
      />
      <UTextarea class="mb-2" v-model="newDrug.note" />
      <UButton class="w-auto" label="Add" color="primary" @click="addNewDrug" />
    </UFormGroup>
    <MyPrint :prescription="drugs" />
  </div>
</template>

<style></style>

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
    name: "Amlodipine",
    dose: "100mg",
    when: "morning",
    frequency: "1x1",
    duration: "3 days",
    notes:
      "This is a star-sized column. The next column over, an auto-sized column, will not wrap to accomodate all the text in this cell, because it has been given the noWrap style",
  },
  {
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
</script>
