<template>
  <UModal v-model="props.isOpen">
    <div class="p-8">
      <h2 class="text-lg font-semibold text-gray-900 mb-4">
        {{ isCreate ? "Add New Drug" : "Edit Drug" }}
      </h2>
      <div class="flex flex-col mb-4 w-full">
        <div class="mb-4">
          <p class="text-sm mb-2">Name</p>

          <UInputMenu
            :search="search"
            @change="changed"
            nullable
            v-model="DrugName"
            placeholder="Name"
            :loading="loading"
            trailing
            option-attribute="name"
          />
        </div>
        <div v-for="(field, key) in fields" :key="key" class="mb-4">
          <p class="text-sm mb-2">{{ field.label }}</p>
          <UInputMenu
            nullable
            v-model="localDrug[key]"
            :placeholder="field.label"
            :options="fetchedDrug[key]"
          />
        </div>
        <div class="mt-4">
          <UButton class="mr-4" @click="handleSave">Save</UButton>
          <UButton
            v-if="!isCreate"
            class="bg-red-600"
            @click="$emit('delete-drug', localDrug.id)"
            >Delete</UButton
          >
          <UButton variant="outline" @click="$emit('close-modal')"
            >Cancel</UButton
          >
        </div>
      </div>
    </div>
  </UModal>
</template>

<script setup>
const loading = ref(false)
const DrugName = ref("")

const props = defineProps({
  isCreate: Boolean,
  drug: Object,
  isOpen: Boolean,
})

const fetchedDrug = ref({})

const emit = defineEmits(["close-modal", "save-drug", "delete-drug"])

const localDrug = ref({ ...props.drug })

const fields = {
  brand: { label: "Brand" },
  dose: { label: "Dose" },
  when: { label: "When" },
  frequency: { label: "Frequency" },
  duration: { label: "Duration" },
}

function handleSave() {
  emit("save-drug", localDrug.value)
}

async function search(q) {
  loading.value = true
  try {
    const response = await $fetch(
      `https://mcq-db.dakakean.com/api/collections/drugs/records?filter=name~"${q}"&expand=doses,frequency`
    )
    console.log(response)
    console.log(response.items)
    console.log(response.items[0])

    loading.value = false
    return response.items
  } catch (error) {
    console.error(error)
    loading.value = false
  }
}

const changed = async (e) => {
  fetchedDrug.value = e
  // createdDrug.value.name = e.name
}
</script>
