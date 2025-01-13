<template>
  <UContainer>
    <!-- name age date -->

    <div class="my-5 print-hide" />
    <div class="flex flex-row justify-between gap-4 mb-10 text-right" dir="rtl">
      <div>
        <p class="print-show">الاسم : {{ patientName }}</p>
        <UInput
          class="print-hide mb-4 font-bold"
          v-model="patientName"
          placeholder="Patient Name"
        />
        <p class="print-show">العمر: {{ patientAge }}</p>
        <UInput
          class="print-hide mb-4 font-bold"
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
          <h1 class="text-base font-semibold leading-6 text-gray-900">Drugs</h1>
          <p class="mt-2 text-sm text-gray-700">
            A list of drugs for the prescription
          </p>
        </div>
        <div class="mt-4 sm:ml-16 sm:mt-0 sm:flex-none">
          <button
            type="button"
            class="block rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            @click="openModal('create')"
          >
            Add Drug
          </button>
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
                    class="py-3.5 px-4 text-left text-sm font-semibold text-gray-900"
                  >
                    #
                  </th>
                  <th
                    scope="col"
                    class="py-3.5 px-4 text-left text-sm font-semibold text-gray-900"
                  >
                    Name
                  </th>
                  <th
                    scope="col"
                    class="py-3.5 px-4 text-left text-sm font-semibold text-gray-900"
                  >
                    Brand
                  </th>
                  <th
                    scope="col"
                    class="py-3.5 px-4 text-left text-sm font-semibold text-gray-900"
                  >
                    Dose
                  </th>
                  <th
                    scope="col"
                    class="py-3.5 px-4 text-left text-sm font-semibold text-gray-900"
                  >
                    When
                  </th>
                  <th
                    scope="col"
                    class="py-3.5 px-4 text-left text-sm font-semibold text-gray-900"
                  >
                    Frequency
                  </th>
                  <th
                    scope="col"
                    class="py-3.5 px-4 text-left text-sm font-semibold text-gray-900"
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
                    class=""
                  >
                    <td class="px-4 py-2 text-sm">
                      {{ index + 1 }}
                    </td>
                    <td class="px-4 py-2 text-sm font-extrabold">
                      {{ drug.name }}
                    </td>
                    <td class="px-4 py-2 text-sm font-extrabold">
                      {{ drug.brand }}
                    </td>
                    <td class="px-4 py-2 text-sm font-extrabold">
                      {{ drug.dose }}
                    </td>
                    <td class="px-4 py-2 text-sm font-extrabold">
                      {{ drug.when }}
                    </td>
                    <td class="px-4 py-2 text-sm font-extrabold">
                      {{ drug.frequency }}
                    </td>
                    <td class="px-4 py-2 text-sm font-extrabold">
                      {{ drug.duration }}
                    </td>
                    <td
                      class="relative py-2 px-4 text-right text-sm font-medium sm:pr-3 print-hide"
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
                      class="px-2 py-2 text-sm font-extrabold text-gray-900 sm:pl-3 border-b-2 border-b-black text-center"
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

    <!-- create modal -->
    <UModal v-model="createModalOpen">
      <div class="p-8">
        <h2 class="text-lg font-semibold text-gray-900 mb-4">Add New Drug</h2>
        <div class="flex flex-col mb-4 w-full justify-between">
          <div class="mb-4">
            <p class="text-sm mb-2">Name</p>
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
              <template #option-empty="{ query }">
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
            <p class="text-sm mb-2">Brand</p>

            <UInputMenu
              :trailing="false"
              :options="fetchedDrug.brand"
              nullable
              v-model="createdDrug.brand"
              @input="handleInput($event, 'brand')"
              placeholder="Brand"
            >
              <template #option-empty="{ query }">
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
            <p class="text-sm mb-2">Dosage</p>
            <UInputMenu
              :options="fetchedDrug.dose || []"
              nullable
              v-model="createdDrug.dose"
              @input="handleInput($event, 'dose')"
              placeholder="Dosage"
            >
              <template #option-empty="{ query }">
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
            <p class="text-sm mb-2">When</p>
            <UInputMenu
              searchable
              :options="fetchedDrug.when"
              nullable
              @input="handleInput($event, 'when')"
              v-model="createdDrug.when"
              placeholder="When"
            >
              <template #option-empty="{ query }">
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
            <p class="text-sm mb-2">Frequency</p>
            <UInputMenu
              searchable
              :options="fetchedDrug.frequency"
              nullable
              @input="handleInput($event, 'frequency')"
              v-model="createdDrug.frequency"
              placeholder="Frequency"
            >
              <template #option-empty="{ query }">
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
            <p class="text-sm mb-2">Duration</p>
            <UInputMenu
              searchable
              :options="fetchedDrug.duration"
              nullable
              @input="handleInput($event, 'duration')"
              v-model="createdDrug.duration"
              placeholder="Duration"
            >
              <template #option-empty="{ query }">
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
            <p class="text-sm mb-2">Note</p>
            <UInputMenu
              searchable
              :options="fetchedDrug.note"
              nullable
              @input="handleInput($event, 'note')"
              v-model="createdDrug.note"
              placeholder="Note"
            >
              <template #option-empty="{ query }">
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
          <div class="mt-4">
            <UButton class="mr-4" @click="addDrug">Save</UButton>
            <UButton class="mr-4" @click="closeModal('create')">Cancel</UButton>
          </div>
        </div>
      </div>
    </UModal>

    <!-- edit modal -->
    <UModal v-model="editModalOpen">
      <div class="p-8">
        <h2 class="text-lg font-semibold text-gray-900 mb-4">
          {{ selectedDrug.id ? "Edit Drug" : "Add New Drug" }}
        </h2>
        <div class="flex flex-col mb-4 w-full justify-between">
          <div class="mb-4">
            <p class="text-sm mb-2">Name</p>
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
            <p class="text-sm mb-2">Brand</p>
            <UInputMenu
              :options="fetchedDrug.brand"
              nullable
              v-model="selectedDrug.brand"
              placeholder="Brand"
              @input="selectedDrug.brand = $event.target.value"
            >
              <template #option-empty="{ query }">
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
            <p class="text-sm mb-2">Dose</p>
            <UInputMenu
              searchable
              :options="fetchedDrug.dose"
              nullable
              v-model.query="selectedDrug.dose"
              v-model="selectedDrug.dose"
              placeholder="Dose"
              @input="selectedDrug.dose = $event.target.value"
            >
              <template #option-empty="{ query }">
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
            <p class="text-sm mb-2">When</p>
            <UInputMenu
              searchable
              :options="fetchedDrug.when"
              nullable
              v-model.query="selectedDrug.when"
              v-model="selectedDrug.when"
              placeholder="When"
              @input="selectedDrug.when = $event.target.value"
            >
              <template #option-empty="{ query }">
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
            <p class="text-sm mb-2">Frequency</p>
            <UInputMenu
              searchable
              :options="fetchedDrug.frequency"
              nullable
              v-model.query="selectedDrug.frequency"
              v-model="selectedDrug.frequency"
              placeholder="Frequency"
              @input="selectedDrug.frequency = $event.target.value"
            >
              <template #option-empty="{ query }">
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
            <p class="text-sm mb-2">Duration</p>
            <UInputMenu
              searchable
              :options="fetchedDrug.duration"
              nullable
              v-model.query="selectedDrug.duration"
              v-model="selectedDrug.duration"
              placeholder="Duration"
              @input="selectedDrug.duration = $event.target.value"
            >
              <template #option-empty="{ query }">
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
            <p class="text-sm mb-2">Note</p>
            <UInputMenu
              searchable
              :options="fetchedDrug.note"
              nullable
              v-model.query="selectedDrug.note"
              v-model="selectedDrug.note"
              placeholder="Note"
              @input="selectedDrug.note = $event.target.value"
            >
              <template #option-empty="{ query }">
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
              >Cancel</UButton
            >
          </div>
        </div>
      </div>
    </UModal>
  </UContainer>
</template>

<script setup>
import { format } from "date-fns"

import PocketBase from "pocketbase"

const pb = new PocketBase("https://mcq-db.dakakean.com")

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
  brand: [],
  frequency: [],
  dose: [],
  duration: [],
  when: [],
  note: [],
})

const createdDrug = ref({
  name: "",
  brand: "",
  frequency: "",
  dose: "",
  duration: "",
  when: "",
  note: "",
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
}

const drugs = ref([])

const openModal = async (modal, drug = {}) => {
  if (modal === "create") {
    createModalOpen.value = true
  } else {
    editModalOpen.value = true
    selectedDrug.value = { ...drug }
    try {
      const response = await $fetch(
        `https://mcq-db.dakakean.com/api/collections/drugs/records?filter=name="${drug.name}"&expand=doses,frequency`
      )
      loading.value = false

      fetchedDrug.value = response.items[0]
    } catch (error) {
      console.error(error)
      loading.value = false
    }
  }
}

const closeModal = (modal) => {
  if (modal === "create") {
    createModalOpen.value = false
  } else {
    editModalOpen.value = false
    selectedDrug.value = {}
  }
}

const saveEdit = () => {
  const index = drugs.value.findIndex((drug) => {
    return drug.id === selectedDrug.value.id
  })

  console.log("selectedDrug.value")
  console.log(selectedDrug.value)

  if (index !== -1) {
    drugs.value.splice(index, 1, {
      ...selectedDrug.value,
      name: createdDrug.value.name,
    })
  } else {
    drugs.value.push({ ...selectedDrug.value, name: createdDrug.value.name })
  }

  console.log({ ...selectedDrug.value, name: createdDrug.value.name })

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
  loading.value = true
  try {
    const response = await $fetch(
      `https://mcq-db.dakakean.com/api/collections/drugs/records?filter=name~"${q}"&expand=doses,frequency`
    )
    loading.value = false

    return response.items
  } catch (error) {
    console.error(error)
    loading.value = false
  }
}

const changed = async (e) => {
  console.log("e")
  console.log(e)
  fetchedDrug.value = e
  createdDrug.value.name = e.name
  createdDrug.value.id = e.id
  console.log("createdDrug.value")
  console.log(createdDrug.value)

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
}

const changedForEdit = (e) => {
  console.log(e)
  fetchedDrug.value = e
  createdDrug.value.name = e.name
  createdDrug.value.id = e.id

  console.log(createdDrug.value.name)

  if (e.brand.length >= 1) {
    createdDrug.value.brand = e.brand[0]
  }
  if (e.dose.length >= 1) {
    createdDrug.value.dose = e.dose[0]
  }
  if (e.when.length >= 1) {
    createdDrug.value.when = e.when[0]
  }
  if (e.frequency.length >= 1) {
    createdDrug.value.frequency = e.frequency[0]
  }
  if (e.duration.length >= 1) {
    createdDrug.value.duration = e.duration[0]
  }
  if (e.note.length >= 1) {
    createdDrug.value.note = e.note[0]
  }
}
</script>

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

tr td span,
tr th span {
  word-wrap: break-word;
  white-space: normal;
}

tr td span {
  font-weight: 600;
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
