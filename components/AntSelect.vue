<template>
  <a-space>
    <a-select
      v-model:value="province"
      style="width: 120px"
      :options="provinceData.map((pro) => ({ value: pro }))"
    ></a-select>
    <a-select
      class="ml-2"
      v-model:value="secondCity"
      style="width: 120px"
      :options="cities.map((city:any )=> ({ value: city }))"
    ></a-select>
  </a-space>
</template>

<script lang="ts" setup>
import aSelect from "ant-design-vue/es/select"
import { computed, ref, watch } from "vue"
const provinceData = ["Zhejiang", "Jiangsu"]
const cityData = {
  Zhejiang: ["Hangzhou", "Ningbo", "Wenzhou"],
  Jiangsu: ["Nanjing", "Suzhou", "Zhenjiang"],
}
const province = ref(provinceData[0])
const secondCity = ref(cityData[province.value][0])
const cities = computed(() => {
  return cityData[province.value]
})

watch(province, (val) => {
  secondCity.value = cityData[val][0]
})
</script>
