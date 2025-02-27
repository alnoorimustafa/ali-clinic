<template>
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
            searchable
            :options="fetchedDrug.brand"
            nullable
            v-model.query="selectedDrug.brand"
            v-model="selectedDrug.brand"
            placeholder="Brand"
          />
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
          />
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
          />
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
          />
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
          />
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
          />
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
</template>

<script setup>
const selectedDrug = ref({})

const deleteDrug = () => {
  drugs.value = drugs.value.filter((drug) => drug.id !== selectedDrug.value.id)
  closeModal("edit")
}

const saveEdit = () => {
  const index = drugs.value.findIndex(
    (drug) => drug.id === selectedDrug.value.id
  )

  if (index !== -1) {
    // Update the existing drug

    drugs.value.splice(index, 1, { ...selectedDrug.value })
  } else {
    // Add a new drug
    drugs.value.push({ ...selectedDrug.value })
  }

  // Close the modal
  editModalOpen.value = false

  // Reset selectedDrug
  selectedDrug.value = {}
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
