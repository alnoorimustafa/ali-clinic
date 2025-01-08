<template>
  <UContainer>
    <div class="print my-10">
      <UButton to="/create">Create or Edit Drugs</UButton>
    </div>
    <!-- Table Component -->
    <div class="flex flex-row justify-between gap-4 mb-10 text-right" dir="rtl">
      <div>
        <p>الاسم : {{ patientName }}</p>
        <p>العمر: {{ patientAge }}</p>
      </div>
      <div>
        <p>التاريخ: {{ new Intl.DateTimeFormat("en-GB").format(date) }}</p>
      </div>
    </div>
    <DrugTable :drugs="drugs" :header="header" />
    <div class="print">
      <UDivider class="my-10" />
      <div class="flex flex-row gap-4 mb-10">
        <UInput v-model="patientName" placeholder="Patient Name" />
        <UInput v-model="patientAge" placeholder="Patient Age" />
        <UPopover :popper="{ placement: 'bottom-start' }">
          <UButton
            icon="i-heroicons-calendar-days-20-solid"
            :label="format(date, 'd MMM, yyy')"
          />

          <template #panel="{ close }">
            <DatePicker v-model="date" is-required @close="close" />
          </template>
        </UPopover>
      </div>
      <!-- Form Component -->
      <DrugForm @add-drug="addNewDrug" />
    </div>
  </UContainer>
</template>

<script setup>
import { format } from "date-fns"
const date = ref(new Date())

const drugs = ref([])
const header = ["#", "Name", "Brand", "Dose", "When", "Frequency", "Duration"]
const patientName = ref("")
const patientAge = ref("")

const addNewDrug = (newDrug) => {
  console.log(newDrug)

  drugs.value.push(newDrug)
}
</script>

<style>
@media print {
  .print {
    display: none;
  }
}
</style>
