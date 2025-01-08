<template>
  <UFormGroup label="New Drug">
    <div class="flex mb-4 w-full justify-between">
      <!-- name -->
      <div class="">
        <UInputMenu
          :search="search"
          :loading="loading"
          placeholder="search for a drug"
          v-model="selectedName"
          option-attribute="name"
          trailing
          by="id"
          @change="changed"
        />
      </div>
      <!-- doses -->
      <div class="ml-2">
        <UInputMenu
          v-if="selected && selected.doses"
          placeholder="Dose"
          v-model="selectedDose"
          :options="
            selected.doses.map((item) => `${item.dose.value} ${item.dose.unit}`)
          "
        />
        <UInputMenu v-else placeholder="Dose" disabled />
      </div>
      <!-- when -->
      <div class="ml-2">
        <UInputMenu
          placeholder="When"
          :options="whenOptions"
          v-model="selectedWhen"
        />
      </div>
      <div class="ml-2">
        <UInputMenu
          v-if="selected && selected.frequency"
          placeholder="Frequency"
          v-model="selectedFrequency"
          :options="
            selected.frequency.map((item) => `${item.frequency.english}`)
          "
        />
        <UInputMenu v-else placeholder="Dose" disabled />
      </div>
      <!-- duration -->
      <div class="ml-2">
        <UInputMenu
          placeholder="Duration"
          v-model="selectedDuration"
          :options="durationOptions"
        />
      </div>
    </div>
    <!-- notes -->
    <div class="mb-4">
      <UTextarea placeholder="Notes" v-model="selectedNotes" />
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
const selectedDose = ref(null)
const selectedWhen = ref(null)
const selectedFrequency = ref(null)
const selectedDuration = ref(null)
const selectedNotes = ref(null)
const loading = ref(false)

const whenOptions = ["morning", "afternoon", "evening", "night"]
const frequencyOptions = ["2x2", "3x3", "4x4", "5x5"]
const durationOptions = ["1", "2", "3", "4", "5"]

const submitForm = () => {
  const drugToAdd = {
    name: selectedName,
    dose: selectedDose,
    when: selectedWhen,
    frequency: selectedFrequency,
    duration: selectedDuration,
    notes: selectedNotes,
  }
  emit("add-drug", drugToAdd)

  selectedName.value = null
  selectedDose.value = null
  selectedWhen.value = null
  selectedFrequency.value = null
  selectedDuration.value = null
  selectedNotes.value = null
}

const changed = async (e) => {
  selected.value = e.expand
  selectedFrequency.value = null
  selectedDose.value = null
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
    console.log(1)
    console.log(users.items[0].expand)
    selected.value = users.items[0].expand

    return users.items
  } catch (error) {
    console.log(error)
    loading.value = false
  }
}
</script>

<style></style>
