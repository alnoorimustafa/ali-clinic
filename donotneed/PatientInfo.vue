<template>
  <div class="flex flex-row justify-between gap-4 mb-10 text-right" dir="rtl">
    <div>
      <p class="print-show">الاسم : {{ patientName }}</p>
      <UInput
        class="print-hide mb-4"
        v-model="localName"
        placeholder="Patient Name"
        @input="$emit('update-name', localName)"
      />
      <p class="print-show">العمر: {{ patientAge }}</p>
      <UInput
        class="print-hide mb-4"
        v-model="localAge"
        placeholder="Patient Age"
        @input="$emit('update-age', localAge)"
      />
    </div>
    <div>
      <p class="print-show">التاريخ: {{ formattedDate }}</p>
      <UPopover class="print-hide" :popper="{ placement: 'bottom-start' }">
        <UButton
          icon="i-heroicons-calendar-days-20-solid"
          :label="formattedDate"
        />
        <template #panel="{ close }">
          <DatePicker
            v-model="localDate"
            @close="close"
            @update:model-value="$emit('update-date', localDate)"
          />
        </template>
      </UPopover>
    </div>
  </div>
</template>

<script setup>
import { ref, watch, computed } from "vue"

const props = defineProps({
  patientName: String,
  patientAge: String,
  date: Date,
})
const emit = defineEmits(["update-name", "update-age", "update-date"])

const localName = ref(props.patientName)
const localAge = ref(props.patientAge)
const localDate = ref(props.date)

const formattedDate = computed(() =>
  new Intl.DateTimeFormat("en-GB").format(localDate.value)
)

watch(
  () => props.patientName,
  (newName) => (localName.value = newName)
)
watch(
  () => props.patientAge,
  (newAge) => (localAge.value = newAge)
)
watch(
  () => props.date,
  (newDate) => (localDate.value = newDate)
)
</script>
