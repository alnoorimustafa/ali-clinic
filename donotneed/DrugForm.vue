<template>
  <UFormGroup label="New Drug">
    <!-- Main form -->
    <div class="flex mb-4 w-full justify-between">
      <div>
        <UInputMenu
          :search="search"
          :loading="loading"
          placeholder="Search for a drug"
          trailing
          by="id"
          @change="changed"
          v-model="selectedName"
          option-attribute="name"
        />
      </div>
      <div class="ml-2">
        <UInputMenu
          :nullable="true"
          v-if="selected"
          placeholder="Brand"
          v-model="selectedBrand"
          :options="selected.brand"
        />
        <UInputMenu v-else placeholder="Brand" disabled />
      </div>
      <div class="ml-2">
        <UInputMenu
          :nullable="true"
          v-if="selected"
          placeholder="Dose"
          v-model="selectedDose"
          :options="selected.dose"
        />
        <UInputMenu v-else placeholder="Dose" disabled />
      </div>
      <div class="ml-2">
        <UInputMenu
          :nullable="true"
          v-if="selected"
          placeholder="When"
          v-model="selectedWhen"
          :options="selected.when"
        />
        <UInputMenu v-else placeholder="When" disabled />
      </div>
      <div class="ml-2">
        <UInputMenu
          :nullable="true"
          v-if="selected"
          placeholder="Frequency"
          v-model="selectedFrequency"
          :options="selected.frequency"
        />
        <UInputMenu v-else placeholder="Frequency" disabled />
      </div>
      <div class="ml-2">
        <UInputMenu
          :nullable="true"
          v-if="selected"
          placeholder="Duration"
          v-model="selectedDuration"
          :options="selected.duration"
        />
        <UInputMenu v-else placeholder="Duration" disabled />
      </div>
    </div>
    <div class="mb-4">
      <UInputMenu
        :nullable="true"
        v-if="selected"
        placeholder="Note"
        v-model="selectedNote"
        :options="selected.note"
      />
      <UInputMenu v-else placeholder="Note" disabled />
    </div>
    <div>
      <UButton class="w-auto" label="Add" color="primary" @click="submitForm" />
    </div>

    <!-- List of added drugs -->
    <div v-for="(drug, index) in drugs" :key="index" class="mt-6">
      <UFormGroup :label="`Drug ${index + 1}`">
        <div class="flex mb-4 w-full justify-between">
          <div>
            <UInputMenu
              placeholder="Name"
              v-model="drug.name"
              :disabled="true"
            />
          </div>
          <div class="ml-2">
            <UInputMenu
              placeholder="Brand"
              v-model="drug.brand"
              :options="drug.options?.brand || []"
            />
          </div>
          <div class="ml-2">
            <UInputMenu
              placeholder="Dose"
              v-model="drug.dose"
              :options="drug.options?.dose || []"
            />
          </div>
          <div class="ml-2">
            <UInputMenu
              placeholder="When"
              v-model="drug.when"
              :options="drug.options?.when || []"
            />
          </div>
          <div class="ml-2">
            <UInputMenu
              placeholder="Frequency"
              v-model="drug.frequency"
              :options="drug.options?.frequency || []"
            />
          </div>
          <div class="ml-2">
            <UInputMenu
              placeholder="Duration"
              v-model="drug.duration"
              :options="drug.options?.duration || []"
            />
          </div>
        </div>
        <div class="mb-4">
          <UInputMenu
            placeholder="Note"
            v-model="drug.notes"
            :options="drug.options?.note || []"
          />
        </div>
        <div>
          <UButton
            class="w-auto"
            label="Update"
            color="primary"
            @click="updateDrug(index)"
          />
          <UButton
            class="w-auto"
            label="Remove"
            color="danger"
            @click="removeDrug(index)"
          />
        </div>
      </UFormGroup>
    </div>
  </UFormGroup>
</template>

<script setup>
import { ref } from "vue"

const emit = defineEmits(["add-drug", "update-drug"])

const selected = ref(null)
const selectedName = ref(null)
const selectedBrand = ref(null)
const selectedDose = ref(null)
const selectedWhen = ref(null)
const selectedFrequency = ref(null)
const selectedDuration = ref(null)
const selectedNote = ref(null)
const drugs = ref([]) // Array to hold added drugs
const loading = ref(false)

const submitForm = () => {
  const drugToAdd = {
    name: selected.value.name,
    brand: selectedBrand.value,
    dose: selectedDose.value,
    when: selectedWhen.value,
    frequency: selectedFrequency.value,
    duration: selectedDuration.value,
    notes: selectedNote.value,
    options: { ...selected.value }, // Store options for later edits
  }
  drugs.value.push(drugToAdd) // Add drug to the list
  emit("add-drug", drugToAdd)

  resetForm()
}

const updateDrug = (index) => {
  const updatedDrug = drugs.value[index]
  emit("update-drug", updatedDrug)
}

const removeDrug = (index) => {
  drugs.value.splice(index, 1) // Remove drug from the list
}

const changed = async (e) => {
  selected.value = e
  selectedBrand.value = null
  selectedDose.value = null
  selectedWhen.value = null
  selectedFrequency.value = null
  selectedDuration.value = null
  selectedNote.value = null
}

const resetForm = () => {
  selected.value = null
  selectedName.value = null
  selectedBrand.value = null
  selectedDose.value = null
  selectedWhen.value = null
  selectedFrequency.value = null
  selectedDuration.value = null
  selectedNote.value = null
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
</script>
