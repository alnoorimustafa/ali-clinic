<template>
  <NewDrugTable />

  <!-- <PrescriptionForm /> -->

  <!-- <UContainer class="my-10 justify-center">
    <ant-auto-complete
      v-model:value="value"
      :options="options"
      style="width: 200px"
      placeholder="Customized clear icon"
      :allow-clear="true"
      @select="onSelect"
      @search="onSearch"
    />
    <ant-auto-complete
      v-model:value="value2"
      :options="[
        {
          label: '500mg',
          value: '500mg',
        },
        { label: '200mg', value: '200mg' },
      ]"
      style="width: 200px; margin-left: 10px"
      placeholder="Customized clear icon"
      :allow-clear="true"
      @select="onSelect"
      @search="onSearch"
    /> -->
  <!-- <NAutoComplete
      v-model:value="value"
      :input-props="{
        autocomplete: 'disabled',
      }"
      :options="options"
      placeholder="Email"
      clearable
    /> -->

  <!-- <NButton type="primary" @click="onSelect"> Submit </NButton>
  </UContainer> -->
</template>

<script setup>
import AntAutoComplete from "ant-design-vue/es/auto-complete"

const options = [
  {
    value: "paracetol",
    label: "paracetol",
    dose: ["300mg", "200mg"],
    key: "1",
  },
  {
    value: "adol",
    label: "adol",
    dose: ["500mg", "1000mg"],
    key: "2",
  },
]

const value = ref(null)
const value2 = ref(null)

const onSelect = (value) => {
  console.log(value)
}

const onSearch = (value) => {
  console.log(value)
}
</script>
