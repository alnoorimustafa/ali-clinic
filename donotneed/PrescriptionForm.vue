<template>
  <UContainer class="py-10">
    <PatientInfo
      :patientName="patientName"
      :patientAge="patientAge"
      :date="date"
      @update-name="patientName = $event"
      @update-age="patientAge = $event"
      @update-date="date = $event"
    />
    <DrugTableGpt
      :drugs="drugs"
      @open-create-modal="openModal('create')"
      @open-edit-modal="openModal('edit', $event)"
    />
    <DrugModal
      :isOpen="isOpen"
      :is-create="createModalOpen"
      :drug="selectedDrug"
      @close-modal="closeModal(createModalOpen ? 'create' : 'edit')"
      @save-drug="saveDrug"
      @delete-drug="deleteDrug"
    />
  </UContainer>
</template>

<script setup>
const patientName = ref("")
const patientAge = ref("")
const date = ref(new Date())
const drugs = ref([])
const fetchedDrug = ref({})
const selectedDrug = ref({})
const createModalOpen = ref(false)
const editModalOpen = ref(false)
const isOpen = ref(false)

function openModal(type, drug = {}) {
  console.log(1)

  if (type === "create") createModalOpen.value = true
  if (type === "edit") {
    selectedDrug.value = drug
    editModalOpen.value = true
  }
  isOpen.value = true
}

function closeModal(type) {
  if (type === "create") createModalOpen.value = false
  if (type === "edit") editModalOpen.value = false
  isOpen.value = false
}

function saveDrug(drug) {
  console.log(drug)

  // Save or update the drug in the list
}

function deleteDrug(drugId) {
  // Remove the drug from the list
}
</script>

<style>
tr td,
tr th {
  text-align: left;
  width: 20%;
  min-width: 13%;
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
