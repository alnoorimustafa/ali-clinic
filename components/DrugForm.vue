<template>
  <UFormGroup label="New Drug">
    <div class="flex mb-4 w-full justify-between">
      <!-- name -->
      <div class="">
        <UInputMenu
          :search="search"
          :loading="loading"
          placeholder="search for a drug"
          trailing
          by="id"
          @change="changed"
          v-model="selectedName"
          option-attribute="name"
        />
      </div>
      <!-- brand -->
      <div class="ml-2">
        <UInputMenu
          :nullable="true"
          v-if="selected && selected.brand"
          placeholder="Brand"
          v-model="selectedBrand"
          :options="selected.brand"
        />
        <UInputMenu v-else placeholder="Brand" disabled />
      </div>
      <!-- doses -->
      <div class="ml-2">
        <UInputMenu
          :nullable="true"
          v-if="selected && selected.dose"
          placeholder="Dose"
          v-model="selectedDose"
          :options="selected.dose"
        />
        <UInputMenu v-else placeholder="Dose" disabled />
      </div>
      <!-- when -->
      <div class="ml-2">
        <UInputMenu
          :nullable="true"
          v-if="selected && selected.when"
          placeholder="When"
          v-model="selectedWhen"
          :options="selected.when"
        />
        <UInputMenu v-else placeholder="When" disabled />
      </div>
      <!-- frequency -->
      <div class="ml-2">
        <UInputMenu
          :nullable="true"
          v-if="selected && selected.frequency"
          placeholder="Frequency"
          v-model="selectedFrequency"
          :options="selected.frequency"
        />
        <UInputMenu v-else placeholder="Dose" disabled />
      </div>
      <!-- duration -->
      <div class="ml-2">
        <UInputMenu
          :nullable="true"
          v-if="selected && selected.duration"
          placeholder="Duration"
          v-model="selectedDuration"
          :options="selected.duration"
        />
        <UInputMenu v-else placeholder="Duration" disabled />
      </div>
    </div>
    <!-- notes -->
    <div class="mb-4">
      <UInputMenu
        :nullable="true"
        v-if="selected && selected.note"
        placeholder="Note"
        v-model="selectedNote"
        :options="selected.note"
      />
      <UInputMenu v-else placeholder="Note" disabled="" />
    </div>
    <div>
      <UButton class="w-auto" label="Add" color="primary" @click="submitForm" />
    </div>
  </UFormGroup>
</template>

<script setup>
const emit = defineEmits(["add-drug"])

const selected = ref(null)
const selectedName = ref(null)
const selectedBrand = ref(null)
const selectedDose = ref(null)
const selectedWhen = ref(null)
const selectedFrequency = ref(null)
const selectedDuration = ref(null)
const selectedNote = ref(null)

const loading = ref(false)

const submitForm = () => {
  console.log(selectedName)
  console.log(selectedName.value)

  const drugToAdd = {
    name: selected.value.name,
    brand: selectedBrand.value,
    dose: selectedDose.value,
    when: selectedWhen.value,
    frequency: selectedFrequency.value,
    duration: selectedDuration.value,
    notes: selectedNote.value,
  }
  emit("add-drug", drugToAdd)

  selectedName.value = null
  selectedDose.value = null
  selectedWhen.value = null
  selectedFrequency.value = null
  selectedDuration.value = null
  selectedNote.value = null
}

const changed = async (e) => {
  console.log(e)
  selected.value = e
  selectedFrequency.value = null
  selectedBrand.value = null
  selectedWhen.value = null
  selectedDose.value = null
  selectedDuration.value = null
  selectedNote.value = null
}

async function search(q) {
  loading.value = true
  try {
    const users = await $fetch(
      `https://mcq-db.dakakean.com/api/collections/drugs/records?filter=name~"${q}"&expand=doses,frequency`
    )
    if (users.items.length === 0) {
      loading.value = false
      return []
    }
    loading.value = false
    console.log(users.items[0])

    selected.value = users.items[0]

    return users.items
  } catch (error) {
    console.log(error)
    loading.value = false
  }
}
</script>

<style></style>
