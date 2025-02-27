<script setup>
import { format } from "date-fns"

import { get, useLocalStorage } from "@vueuse/core"

import PocketBase from "pocketbase"

const key = useLocalStorage("openai-api-key", "")

const pb = new PocketBase("https://mcq-db.dakakean.com")

import { useDrugWarnings } from "../composables/useDrugWarnings"
import { useDrugInteractions } from "@/composables/useDrugInteractions"
import { useDrugStore } from "../composables/useDrugStore"

const {
  warnings,
  pregnancyWarnings,
  indications,
  doNotUse,
  stopUse,
  keepOutOfReach,
  dosage,
  storage,
  loading: warningsLoading,
  error: warningsError,
  fetchDrugWarnings,
} = useDrugWarnings()

const { drugList } = useDrugStore()
const {
  checkInteraction,
  interaction,
  error: interactionError,
  loading: loadingInteractions,
} = useDrugInteractions()

const fontSize = ref("16")
const fontWeight = ref("700")
const whiteSpace = ref("nowrap")

// const drugList = useLocalStorage("drugList", [])

const drugs = ref([])

const date = ref(new Date())
const newLoading = ref(false)
const editModalOpen = ref(false)
const createModalOpen = ref(false)
const selectedDrug = ref({})
const patientName = ref("")
const patientAge = ref("")
const loading = ref(false)
const fetchedDrug = ref({
  name: "",
  fdaName: "",
  brand: [],
  frequency: [],
  dose: [],
  duration: [],
  when: [],
  note: [],
  hidden: [],
})

const createdDrug = ref({
  name: "",
  fdaName: "",
  brand: "",
  frequency: "",
  dose: "",
  duration: "",
  when: "",
  note: "",
  hidden: "",
})

const createNew = async (itemType, newItem) => {
  if (!newItem) return
  newLoading.value = true
  if (itemType === "name") {
    const newDrug = await pb.collection("drugs").create({ name: newItem })
    fetchedDrug.value = newDrug
  } else if (!fetchedDrug.value[itemType]) {
    const newDrug = await pb
      .collection("drugs")
      .update(fetchedDrug.value.id, { [itemType]: [newItem] })
    fetchedDrug.value = newDrug
  } else {
    try {
      const updatedData = {
        ...fetchedDrug.value,
        [itemType]: [...fetchedDrug.value[itemType], newItem],
      }
      await pb.collection("drugs").update(fetchedDrug.value.id, updatedData)
      fetchedDrug.value = updatedData
    } catch (error) {
      console.error("Error creating new item:", error)
    }
  }
  newLoading.value = false
}

const handleInput = (event, inputName) => {
  // Update the v-model when the user enters a custom value
  createdDrug.value[inputName] = event.target.value
  console.log("event.target.value")
  console.log(event.target.value)
}

const openModal = async (modal, drug = {}) => {
  if (modal === "create") {
    createModalOpen.value = true
  } else {
    editModalOpen.value = true
    selectedDrug.value = { ...drug }
    console.log("selectedDrug.value")
    console.log(selectedDrug.value)

    try {
      const response = await $fetch(
        `https://mcq-db.dakakean.com/api/collections/drugs/records?filter=name="${drug.name}"&expand=doses,frequency`
      )
      loading.value = false
      console.log("response.items")
      console.log(response.items)

      if (response.items.length > 0) {
        fetchedDrug.value = response.items[0]
      } else {
        fetchedDrug.value = {}
      }
    } catch (error) {
      console.error(error)
      loading.value = false
    }
  }
}

const closeModal = (modal) => {
  if (modal === "create") {
    console.log("close modal create")
    createdDrug.value = {}
    createModalOpen.value = false
  } else {
    console.log("close modal create else")
    editModalOpen.value = false
    selectedDrug.value = {}
  }
}

const saveEdit = () => {
  const index = drugs.value.findIndex((drug) => {
    return drug.id === selectedDrug.value.id
  })

  if (createdDrug.value.name) {
    selectedDrug.value.name = createdDrug.value.name
  }

  if (index !== -1) {
    drugs.value.splice(index, 1, {
      ...selectedDrug.value,
    })
  } else {
    drugs.value.push({ ...selectedDrug.value })
  }

  editModalOpen.value = false

  selectedDrug.value = {}
  createdDrug.value = {}
}

const addDrug = () => {
  drugs.value.push({ ...createdDrug.value })
  closeModal("create")
  fetchedDrug.value = {}
  createdDrug.value = {}
}

const deleteDrug = () => {
  drugs.value = drugs.value.filter((drug) => drug.id !== selectedDrug.value.id)
  closeModal("edit")
}

async function search(q) {
  if (!navigator.onLine) {
    return drugList.value.filter(
      (drug) =>
        drug.name.toLowerCase().includes(q.toLowerCase()) ||
        drug.brand.toLowerCase().includes(q.toLowerCase())
    )
  }
  loading.value = true
  try {
    // Escape special characters in the query for PocketBase filter
    const escapedQuery = q.replace(/([\\"])/g, "\\$1")

    const response = await $fetch(
      `https://mcq-db.dakakean.com/api/collections/drugs/records?filter=(name~"${escapedQuery}"||brand~"${escapedQuery}")&expand=doses,frequency`
    )
    loading.value = false

    console.log(response.items)

    return response.items
  } catch (error) {
    console.error(error)
    loading.value = false
    return [] // Return an empty array in case of an error to prevent further issues.
  }
}

const fetchDrugs = async () => {
  try {
    const all = await pb.collection("drugs").getFullList()

    drugList.value = all

    loading.value = false
  } catch (error) {}
}

const changed = async (e) => {
  console.log("e.name")
  console.log(e.name)

  fetchedDrug.value = e
  createdDrug.value.name = e.name
  createdDrug.value.id = e.id

  if (e.brand.length >= 1) {
    createdDrug.value.brand = e.brand[0]
    selectedDrug.value.brand = e.brand[0]
  }
  if (e.dose.length >= 1) {
    createdDrug.value.dose = e.dose[0]
    selectedDrug.value.dose = e.dose[0]
  }
  if (e.when.length >= 1) {
    createdDrug.value.when = e.when[0]
    selectedDrug.value.when = e.when[0]
  }
  if (e.frequency.length >= 1) {
    createdDrug.value.frequency = e.frequency[0]
    selectedDrug.value.frequency = e.frequency[0]
  }
  if (e.duration.length >= 1) {
    createdDrug.value.duration = e.duration[0]
    selectedDrug.value.duration = e.duration[0]
  }
  if (e.note.length >= 1) {
    createdDrug.value.note = e.note[0]
    selectedDrug.value.note = e.note[0]
  }
  if (e.hidden?.length >= 1) {
    createdDrug.value.hidden = e.hidden[0]
    selectedDrug.value.hidden = e.hidden[0]
  }
}

async function getWarnings() {
  if (fetchedDrug.value.name) {
    await fetchDrugWarnings(fetchedDrug.value.fdaName)
  }
}

onMounted(fetchDrugs)
</script>

<template>
  <UContainer
    :style="{
      fontSize: fontSize + 'px !important',
      fontWeight: fontWeight + ' !important',
      whiteSpace: whiteSpace,
    }"
  >
    <!-- font size and weight -->
    <div class="my-5 text-right print-hide">
      <UButton to="/create"> Create New Drug </UButton>
    </div>
    <div
      class="my-5 flex flex-row justify-between gap-4 mb-10 text-right print-hide"
      dir="rtl"
    >
      <div>
        <p class="mb-1 mr-1 text-sm">حجم الخط</p>
        <UInput
          class="print-hide mb-4"
          type="number"
          v-model="fontSize"
          placeholder="Font Size"
        />
        <p class="mb-1 mr-1 text-sm">وزن الخط</p>
        <UInputMenu
          :options="[
            '100',
            '200',
            '300',
            '400',
            '500',
            '600',
            '700',
            '800',
            '900',
          ]"
          class="print-hide mb-4"
          v-model="fontWeight"
          placeholder="Font Weight"
        />
        <p class="mb-1 mr-1 text-sm">المساحة البيضاء</p>
        <UInputMenu
          :options="[
            'normal',
            'pre',
            'pre-wrap',
            'pre-line',
            'wrap',
            'collapse',
            'preserve nowrap',
            'nowrap',
          ]"
          class="print-hide mb-4"
          v-model="whiteSpace"
          placeholder="White Space"
        />
      </div>
    </div>
    <!-- name age date -->
    <div class="flex flex-row justify-between gap-4 mb-10 text-right" dir="rtl">
      <div>
        <p class="print-show">الاسم : {{ patientName }}</p>
        <UInput
          class="print-hide mb-4"
          v-model="patientName"
          placeholder="Patient Name"
        />
        <p class="print-show">العمر: {{ patientAge }}</p>
        <UInput
          class="print-hide mb-4"
          v-model="patientAge"
          placeholder="Patient Age"
        />
      </div>
      <div>
        <p class="print-show">
          التاريخ: {{ new Intl.DateTimeFormat("en-GB").format(date) }}
        </p>
        <UPopover class="print-hide" :popper="{ placement: 'bottom-start' }">
          <UButton
            icon="i-heroicons-calendar-days-20-solid"
            :label="format(date, 'd/MM/yyyy')"
          />

          <template #panel="{ close }">
            <DatePicker v-model="date" is-required @close="close" />
          </template>
        </UPopover>
      </div>
    </div>

    <!-- all table  -->
    <div>
      <!-- Header and Add Button -->
      <div class="sm:flex sm:items-center print-hide">
        <div class="sm:flex-auto">
          <h1 class="leading-6 text-gray-900">Drugs</h1>
          <p class="mt-2 text-gray-700">A list of drugs for the prescription</p>
        </div>
        <div class="mt-4 sm:mt-0 sm:flex-none ml-2">
          <UButton
            :loading="loadingInteractions"
            type="button"
            class="block rounded-md px-3 py-2 text-center text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 bg-yellow-500"
            @click="checkInteraction(drugs.map((drug) => drug.name))"
          >
            Check Interactions
          </UButton>
        </div>
        <div class="mt-4 sm:mt-0 sm:flex-none ml-2">
          <UButton
            type="button"
            class="block rounded-md px-3 py-2 text-center text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
            @click="openModal('create')"
          >
            Add Drug
          </UButton>
        </div>
      </div>

      <!-- Table -->
      <div class="mt-8 flow-root">
        <div class="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div
            class="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8"
          >
            <table
              class="min-w-full border-2 border-slate-800 divide-y divide-gray-300"
            >
              <!-- Header -->
              <thead class="bg-white">
                <tr>
                  <th
                    scope="col"
                    class="py-3.5 px-4 text-left text-gray-900"
                    :style="{
                      fontWeight: fontWeight,
                      fontSize: `${fontSize}px`,
                    }"
                  >
                    #
                  </th>
                  <th
                    scope="col"
                    class="py-3.5 px-4 text-left text-gray-900"
                    :style="{
                      fontWeight: fontWeight,
                      fontSize: `${fontSize}px`,
                    }"
                  >
                    Name
                  </th>
                  <th
                    scope="col"
                    class="py-3.5 px-4 text-left text-gray-900"
                    :style="{
                      fontWeight: fontWeight,
                      fontSize: `${fontSize}px`,
                    }"
                  >
                    Brand
                  </th>
                  <th
                    scope="col"
                    class="py-3.5 px-4 text-left text-gray-900"
                    :style="{
                      fontWeight: fontWeight,
                      fontSize: `${fontSize}px`,
                    }"
                  >
                    Dose
                  </th>
                  <th
                    scope="col"
                    class="py-3.5 px-4 text-left text-gray-900"
                    :style="{
                      fontWeight: fontWeight,
                      fontSize: `${fontSize}px`,
                    }"
                  >
                    When
                  </th>
                  <th
                    scope="col"
                    class="py-3.5 px-4 text-left text-gray-900"
                    :style="{
                      fontWeight: fontWeight,
                      fontSize: `${fontSize}px`,
                    }"
                  >
                    Frequency
                  </th>
                  <th
                    scope="col"
                    class="py-3.5 px-4 text-left text-gray-900"
                    :style="{
                      fontWeight: fontWeight,
                      fontSize: `${fontSize}px`,
                    }"
                  >
                    Duration
                  </th>
                  <th scope="col" class="relative py-3.5 px-2 print-hide">
                    <span class="sr-only">Edit</span>
                  </th>
                </tr>
              </thead>

              <!-- Body -->

              <template v-for="(drug, index) in drugs" :key="drug.id">
                <tbody class="bg-white col-span-12">
                  <tr
                    :class="[
                      index === 0 ? 'border-gray-800' : 'border-gray-800',
                      'border-t-2',
                    ]"
                  >
                    <td
                      class="px-4 py-2"
                      :style="{
                        fontWeight: fontWeight,
                        fontSize: `${fontSize}px`,
                      }"
                    >
                      {{ index + 1 }}
                    </td>
                    <td
                      class="px-4 py-2 font-extrabold"
                      :style="{
                        fontWeight: fontWeight,
                        fontSize: `${fontSize}px`,
                        whiteSpace: 'nowrap',
                      }"
                    >
                      {{ drug.name }}
                    </td>
                    <td
                      class="px-4 py-2 font-extrabold"
                      :style="{
                        fontWeight: fontWeight,
                        fontSize: `${fontSize}px`,
                      }"
                    >
                      {{ drug.brand }}
                    </td>
                    <td
                      class="px-4 py-2 font-extrabold"
                      :style="{
                        fontWeight: fontWeight,
                        fontSize: `${fontSize}px`,
                      }"
                    >
                      {{ drug.dose }}
                    </td>
                    <td
                      class="px-4 py-2 font-extrabold"
                      :style="{
                        fontWeight: fontWeight,
                        fontSize: `${fontSize}px`,
                      }"
                    >
                      {{ drug.when }}
                    </td>
                    <td
                      class="px-4 py-2 font-extrabold"
                      :style="{
                        fontWeight: fontWeight,
                        fontSize: `${fontSize}px`,
                      }"
                    >
                      {{ drug.frequency }}
                    </td>
                    <td
                      class="px-4 py-2 font-extrabold"
                      :style="{
                        fontWeight: fontWeight,
                        fontSize: `${fontSize}px`,
                      }"
                    >
                      {{ drug.duration }}
                    </td>
                    <td
                      class="relative py-2 px-4 text-right font-medium sm:pr-3 print-hide"
                      :style="{
                        fontWeight: fontWeight,
                        fontSize: `${fontSize}px`,
                        userSelect: 'none',
                      }"
                    >
                      <a
                        @click.prevent="openModal('edit', drug)"
                        href="#"
                        class="text-indigo-600 hover:text-indigo-900"
                      >
                        Edit<span class="sr-only">, {{ drug.name }}</span>
                      </a>
                    </td>
                  </tr>
                  <tr class="" dir="rtl" v-if="drug.note">
                    <td
                      colspan="12"
                      class="px-2 py-2 font-extrabold text-gray-900 sm:pl-3 border-b-2 border-b-black text-center"
                      :style="{
                        fontWeight: fontWeight,
                        fontSize: `${fontSize}px`,
                      }"
                    >
                      {{ drug.note }}
                    </td>
                  </tr>
                </tbody>
              </template>
            </table>
          </div>
        </div>
      </div>
    </div>

    <div v-if="interaction.summary || interactionError" class="my-10 text-wrap">
      <p class="mb-2 font-bold text-yellow-600">Interactions</p>

      <p v-if="interactionError" class="text-red-600">
        {{ interactionError }}
      </p>

      <div v-else class="interaction">
        <p class="font-bold mb-2">Summary:</p>
        <p class="font-medium mb-4">{{ interaction.summary }}</p>

        <p class="font-bold mb-2">Severity Level:</p>
        <p class="font-medium mb-4">🔴 {{ interaction.severity }}</p>

        <p class="font-bold mb-2">Mechanism:</p>
        <p class="font-medium mb-4">{{ interaction.mechanism }}</p>

        <ul>
          <li v-for="(point, index) in interaction.details" :key="index">
            {{ point }}
          </li>
        </ul>

        <p class="font-bold mb-2">Clinical Recommendation:</p>
        <p class="font-medium mb-4">{{ interaction.recommendation }}</p>

        <p class="font-bold mb-2">Sources:</p>
        <ul>
          <li
            class="font-medium mb-1"
            v-for="(source, index) in interaction.sources"
            :key="index"
          >
            <!-- <a :href="source.link" target="_blank">{{ source.name }}</a> -->
            <a
              :href="source.url"
              target="_blank"
              class="text-blue-500 underline"
              >{{ source.name }}</a
            >
          </li>
        </ul>
      </div>
    </div>

    <!-- create modal -->
    <UModal v-model="createModalOpen">
      <div class="p-8">
        <h2 class="text-lg text-gray-900 mb-4">Add New Drug</h2>
        <div class="flex flex-col mb-4 w-full justify-between">
          <div class="mb-4">
            <p class="mb-2">Name</p>
            <UInputMenu
              v-model="createdDrug.name"
              :search="search"
              @change="changed"
              :loading="loading"
              trailing
              option-attribute="name"
              @input="handleInput($event, 'name')"
              placeholder="Name"
            >
              <template #option="{ option: drug }">
                <span>{{ drug.icon }}</span>
                <span>{{ drug.name }}</span>
                <span>{{ drug.brand }}</span>
              </template>
              <template
                #option-empty="{ query }"
                v-if="createdDrug.name !== ''"
              >
                <span>{{ fetchedDrug.name }}</span>
                <UButton
                  :loading="newLoading"
                  @click="createNew('name', createdDrug.name)"
                >
                  <template #leading v-if="!newLoading">
                    <UIcon name="i-heroicons-plus" class="w-5 h-5" />
                  </template>
                </UButton>
              </template>
            </UInputMenu>
          </div>
          <div class="mb-4">
            <p class="mb-2">Brand</p>
            <UInputMenu
              :trailing="false"
              :options="fetchedDrug.brand ? fetchedDrug.brand : []"
              nullable
              v-model="createdDrug.brand"
              @input="handleInput($event, 'brand')"
              placeholder="Brand"
            >
              <template
                #option-empty="{ query }"
                v-if="createdDrug.name !== ''"
              >
                <UButton
                  :loading="newLoading"
                  @click="createNew('brand', createdDrug.brand)"
                >
                  <template #leading v-if="!newLoading">
                    <UIcon name="i-heroicons-plus" class="w-5 h-5" /> </template
                ></UButton>
              </template>
            </UInputMenu>
          </div>
          <div class="mb-4">
            <p class="mb-2">Dosage</p>
            <UInputMenu
              :options="fetchedDrug.dose ? fetchedDrug.dose : []"
              nullable
              v-model="createdDrug.dose"
              @input="handleInput($event, 'dose')"
              placeholder="Dosage"
            >
              <template
                #option-empty="{ query }"
                v-if="createdDrug.name !== ''"
              >
                <UButton
                  :loading="newLoading"
                  @click="createNew('dose', createdDrug.dose)"
                >
                  <template #leading v-if="!newLoading">
                    <UIcon name="i-heroicons-plus" class="w-5 h-5" /> </template
                ></UButton>
              </template>
            </UInputMenu>
          </div>
          <div class="mb-4">
            <p class="mb-2">When</p>
            <UInputMenu
              searchable
              :options="fetchedDrug.when ? fetchedDrug.when : []"
              nullable
              @input="handleInput($event, 'when')"
              v-model="createdDrug.when"
              placeholder="When"
            >
              <template
                #option-empty="{ query }"
                v-if="createdDrug.name !== ''"
              >
                <UButton
                  :loading="newLoading"
                  @click="createNew('when', createdDrug.when)"
                >
                  <template #leading v-if="!newLoading">
                    <UIcon name="i-heroicons-plus" class="w-5 h-5" /> </template
                ></UButton>
              </template>
            </UInputMenu>
          </div>
          <div class="mb-4">
            <p class="mb-2">Frequency</p>
            <UInputMenu
              searchable
              :options="fetchedDrug.frequency ? fetchedDrug.frequency : []"
              nullable
              @input="handleInput($event, 'frequency')"
              v-model="createdDrug.frequency"
              placeholder="Frequency"
            >
              <template
                #option-empty="{ query }"
                v-if="createdDrug.name !== ''"
              >
                <UButton
                  :loading="newLoading"
                  @click="createNew('frequency', createdDrug.frequency)"
                >
                  <template #leading v-if="!newLoading">
                    <UIcon name="i-heroicons-plus" class="w-5 h-5" /> </template
                ></UButton>
              </template>
            </UInputMenu>
          </div>
          <div class="mb-4">
            <p class="mb-2">Duration</p>
            <UInputMenu
              searchable
              :options="fetchedDrug.duration ? fetchedDrug.duration : []"
              nullable
              v-model="createdDrug.duration"
              @input="handleInput($event, 'duration')"
              placeholder="Duration"
            >
              <template
                #option-empty="{ query }"
                v-if="createdDrug.name !== ''"
              >
                <UButton
                  :loading="newLoading"
                  @click="createNew('duration', createdDrug.duration)"
                >
                  <template #leading v-if="!newLoading">
                    <UIcon name="i-heroicons-plus" class="w-5 h-5" /> </template
                ></UButton>
              </template>
            </UInputMenu>
          </div>
          <div class="mb-4">
            <p class="mb-2">Note</p>
            <UInputMenu
              searchable
              :options="fetchedDrug.note ? fetchedDrug.note : []"
              nullable
              v-model="createdDrug.note"
              @input="handleInput($event, 'note')"
              placeholder="Note"
            >
              <template
                #option-empty="{ query }"
                v-if="createdDrug.name !== ''"
              >
                <UButton
                  :loading="newLoading"
                  @click="createNew('note', createdDrug.note)"
                >
                  <template #leading v-if="!newLoading">
                    <UIcon name="i-heroicons-plus" class="w-5 h-5" /> </template
                ></UButton>
              </template>
            </UInputMenu>
          </div>
          <div class="mb-4" v-if="fetchedDrug.hidden?.length > 0">
            <p class="mb-2">Hidden Notes</p>
            <p v-for="(item, index) in fetchedDrug.hidden" :key="index">
              {{ item }}
            </p>
          </div>
          <!-- FDA -->
          <p class="mb-2 font-bold">FDA Information</p>
          <div>
            <!-- dosage -->
            <div class="mb-4" v-if="dosage?.length > 0">
              <p class="mb-2">Dosage</p>
              <p
                v-for="(item, index) in dosage"
                :key="index"
                class="text-red-600 mb-2"
              >
                {{ item }}
              </p>
            </div>
            <!-- storage -->
            <div class="mb-4" v-if="storage?.length > 0">
              <p class="mb-2">Storage</p>
              <p
                v-for="(item, index) in storage"
                :key="index"
                class="text-red-600 mb-2"
              >
                {{ item }}
              </p>
            </div>
            <!-- Warnings -->
            <div class="mb-4" v-if="warnings?.length > 0">
              <p class="mb-2">Warnings</p>
              <p
                v-for="(item, index) in warnings"
                :key="index"
                class="text-red-600 mb-2"
              >
                {{ item }}
              </p>
            </div>
            <!-- Pregnancy Warnings -->
            <div class="mb-4" v-if="pregnancyWarnings?.length > 0">
              <p class="mb-2">Pregnancy Warnings</p>
              <p
                v-for="(item, index) in pregnancyWarnings"
                :key="index"
                class="text-red-600 mb-2"
              >
                {{ item }}
              </p>
            </div>
            <!-- indications -->
            <!-- <div class="mb-4" v-if="indications?.length > 0">
              <p class="mb-2">Indications</p>
              <p
                v-for="(item, index) in indications"
                :key="index"
                class="text-red-600 mb-2"
              >
                {{ item }}
              </p>
            </div> -->
            <!-- doNotUse -->
            <!-- <div class="mb-4" v-if="doNotUse?.length > 0">
              <p class="mb-2">Do Not Use</p>
              <p
                v-for="(item, index) in doNotUse"
                :key="index"
                class="text-red-600 mb-2"
              >
                {{ item }}
              </p>
            </div> -->
            <!-- stopUse -->
            <div class="mb-4" v-if="stopUse?.length > 0">
              <p class="mb-2">Stop Use</p>
              <p
                v-for="(item, index) in stopUse"
                :key="index"
                class="text-red-600 mb-2"
              >
                {{ item }}
              </p>
            </div>
            <!-- keepOutOfReach -->
            <div class="mb-4" v-if="keepOutOfReach?.length > 0">
              <p class="mb-2">Keep Out Of Reach</p>
              <p
                v-for="(item, index) in keepOutOfReach"
                :key="index"
                class="text-red-600 mb-2"
              >
                {{ item }}
              </p>
            </div>
          </div>
          <div class="mt-4">
            <UButton class="mr-4" @click="addDrug">Save</UButton>
            <UButton class="mr-4" @click="closeModal('create')">Cancel</UButton>
            <UButton
              class="mr-4 bg-yellow-400"
              @click="getWarnings"
              :loading="warningsLoading"
              >Show FDA Info</UButton
            >
          </div>
        </div>
      </div>
    </UModal>

    <!-- edit modal -->
    <UModal v-model="editModalOpen">
      <div class="p-8">
        <h2 class="text-lg text-gray-900 mb-4">
          {{ selectedDrug.id ? "Edit Drug" : "Add New Drug" }}
        </h2>
        <div class="flex flex-col mb-4 w-full justify-between">
          <div class="mb-4">
            <p class="mb-2">Name</p>
            <UInputMenu
              :search="search"
              @change="changed"
              :loading="loading"
              trailing
              option-attribute="name"
              v-model.query="selectedDrug.name"
              v-model="selectedDrug.name"
              placeholder="Name"
            />
          </div>
          <div class="mb-4">
            <p class="mb-2">Brand</p>
            <UInputMenu
              :options="fetchedDrug.brand ? fetchedDrug.brand : []"
              nullable
              v-model="selectedDrug.brand"
              placeholder="Brand"
              @input="selectedDrug.brand = $event.target.value"
            >
              <template
                #option-empty="{ query }"
                v-if="createdDrug.name !== ''"
              >
                <UButton
                  :loading="newLoading"
                  @click="createNew('brand', selectedDrug.brand)"
                >
                  <template #leading v-if="!newLoading">
                    <UIcon name="i-heroicons-plus" class="w-5 h-5" />
                  </template>
                </UButton>
              </template>
            </UInputMenu>
          </div>
          <div class="mb-4">
            <p class="mb-2">Dose</p>
            <UInputMenu
              searchable
              :options="fetchedDrug.dose ? fetchedDrug.dose : []"
              nullable
              v-model.query="selectedDrug.dose"
              v-model="selectedDrug.dose"
              placeholder="Dose"
              @input="selectedDrug.dose = $event.target.value"
            >
              <template
                #option-empty="{ query }"
                v-if="createdDrug.name !== ''"
              >
                <UButton
                  :loading="newLoading"
                  @click="createNew('dose', selectedDrug.dose)"
                >
                  <template #leading v-if="!newLoading">
                    <UIcon name="i-heroicons-plus" class="w-5 h-5" />
                  </template>
                </UButton>
              </template>
            </UInputMenu>
          </div>
          <div class="mb-4">
            <p class="mb-2">When</p>
            <UInputMenu
              searchable
              :options="fetchedDrug.when ? fetchedDrug.when : []"
              nullable
              v-model.query="selectedDrug.when"
              v-model="selectedDrug.when"
              placeholder="When"
              @input="selectedDrug.when = $event.target.value"
            >
              <template
                #option-empty="{ query }"
                v-if="createdDrug.name !== ''"
              >
                <UButton
                  :loading="newLoading"
                  @click="createNew('when', selectedDrug.when)"
                >
                  <template #leading v-if="!newLoading">
                    <UIcon name="i-heroicons-plus" class="w-5 h-5" />
                  </template>
                </UButton>
              </template>
            </UInputMenu>
          </div>
          <div class="mb-4">
            <p class="mb-2">Frequency</p>
            <UInputMenu
              searchable
              :options="fetchedDrug.frequency ? fetchedDrug.frequency : []"
              nullable
              v-model.query="selectedDrug.frequency"
              v-model="selectedDrug.frequency"
              placeholder="Frequency"
              @input="selectedDrug.frequency = $event.target.value"
            >
              <template
                #option-empty="{ query }"
                v-if="createdDrug.name !== ''"
              >
                <UButton
                  :loading="newLoading"
                  @click="createNew('frequency', selectedDrug.frequency)"
                >
                  <template #leading v-if="!newLoading">
                    <UIcon name="i-heroicons-plus" class="w-5 h-5" />
                  </template>
                </UButton>
              </template>
            </UInputMenu>
          </div>
          <div class="mb-4">
            <p class="mb-2">Duration</p>
            <UInputMenu
              searchable
              :options="fetchedDrug.duration ? fetchedDrug.duration : []"
              nullable
              v-model.query="selectedDrug.duration"
              v-model="selectedDrug.duration"
              placeholder="Duration"
              @input="selectedDrug.duration = $event.target.value"
            >
              <template
                #option-empty="{ query }"
                v-if="createdDrug.name !== ''"
              >
                <UButton
                  :loading="newLoading"
                  @click="createNew('Duration', selectedDrug.duration)"
                >
                  <template #leading v-if="!newLoading">
                    <UIcon name="i-heroicons-plus" class="w-5 h-5" />
                  </template>
                </UButton>
              </template>
            </UInputMenu>
          </div>
          <div class="mb-4">
            <p class="mb-2">Note</p>
            <UInputMenu
              searchable
              :options="fetchedDrug.note ? fetchedDrug.note : []"
              nullable
              v-model.query="selectedDrug.note"
              v-model="selectedDrug.note"
              placeholder="Note"
              @input="selectedDrug.note = $event.target.value"
            >
              <template
                #option-empty="{ query }"
                v-if="createdDrug.name !== ''"
              >
                <UButton
                  :loading="newLoading"
                  @click="createNew('Note', selectedDrug.note)"
                >
                  <template #leading v-if="!newLoading">
                    <UIcon name="i-heroicons-plus" class="w-5 h-5" />
                  </template>
                </UButton>
              </template>
            </UInputMenu>
          </div>
          <div class="mt-4 flex flex-row justify-between">
            <div>
              <UButton class="mr-4" @click="saveEdit">Save</UButton>
              <UButton class="mr-4 bg-red-600" @click="deleteDrug"
                >Delete</UButton
              >
            </div>
            <UButton class="" variant="outline" @click="closeModal('edit')"
              >Cancel
            </UButton>
          </div>
        </div>
      </div>
    </UModal>
  </UContainer>
</template>

<style>
tr td,
tr th {
  text-align: left;
  width: auto;
  min-width: 15%;
}

tr td:first-child,
tr th:first-child {
  width: 3%;
  min-width: 3%;
}

.print-show {
  display: none;
}

@media print {
  .print-show {
    display: block;
  }
  .print-hide {
    display: none;
  }
}
</style>
