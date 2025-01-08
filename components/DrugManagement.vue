<template>
  <UContainer>
    <!-- Table Component -->
    <DrugTable :drugs="drugs" :header="header" />

    <UDivider class="my-10" />

    <!-- Form Component -->
    <DrugForm @add-drug="addNewDrug" />
  </UContainer>
</template>

<script setup>
const drugs = ref([
  {
    id: 1,
    name: "Amlodipine",
    dose: "100mg",
    when: "morning",
    frequency: "1x1",
    duration: "3 days",
    notes:
      "This is a star-sized column. The next column over, an auto-sized column, will not wrap to accomodate all the text in this cell, because it has been given the noWrap style",
  },
  {
    id: 2,
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

const addNewDrug = (newDrug) => {
  drugs.value.push(newDrug)
}
</script>
