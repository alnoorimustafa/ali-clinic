<template>
  <div class="mt-8 flow-root">
    <div class="-mx-4 -my-2 sm:-mx-6 lg:-mx-8">
      <div class="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
        <div class="shadow ring-1 ring-black ring-opacity-5 sm:rounded-lg">
          <table class="min-w-full divide-y divide-gray-300 header-table">
            <thead class="bg-gray-50">
              <tr>
                <th
                  v-for="item in header"
                  :key="item"
                  scope="col"
                  class="py-4 pl-2 pr-3 text-sm font-medium text-gray-900"
                >
                  <span>{{ item }}</span>
                </th>
              </tr>
            </thead>
          </table>
          <div v-for="(drug, index) in drugs" :key="drug.name">
            <UDivider size="sm" />

            <table class="min-w-full row-table">
              <tbody class="bg-white mainTable">
                <tr @click="emitDeleteDrug(index)" class="cursor-pointer">
                  <td class="py-2 pl-2 text-sm font-medium text-gray-900">
                    {{ index + 1 }}
                  </td>
                  <td class="py-2 pl-2 text-sm font-medium text-gray-900">
                    <span>{{ drug.name }}</span>
                  </td>
                  <td class="py-2 pl-2 text-sm font-medium text-gray-900">
                    <span>{{ drug.brand }}</span>
                  </td>
                  <td class="py-2 pl-2 text-sm font-medium text-gray-900">
                    <span>{{ drug.dose }}</span>
                  </td>
                  <td class="py-2 pl-2 text-sm font-medium text-gray-900">
                    <span>{{ drug.when }}</span>
                  </td>
                  <td class="py-2 pl-2 text-sm font-medium text-gray-900">
                    <span>{{ drug.frequency }}</span>
                  </td>
                  <td class="py-2 pl-2 text-sm font-medium text-gray-900">
                    <span>{{ drug.duration }}</span>
                  </td>
                </tr>

                <tr class="">
                  <td colspan="6" class="notes-row p-1">
                    <div class="text-sm text-right">
                      {{ drug.notes }}
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
// Emit function to notify parent component
const emit = defineEmits(["deleteDrug"])
const emitDeleteDrug = (index) => {
  emit("deleteDrug", index)
}

defineProps({
  drugs: {
    type: Array,
    required: true,
  },
  header: {
    type: Array,
    required: true,
  },
})
</script>

<style>
tr td:first-child,
tr th:first-child {
  width: 5%;
  max-width: 5%;
}
tr td,
tr th {
  text-align: left;
  width: 14.2%;
  max-width: 14.2%;
}
tr td span,
tr th span {
  word-wrap: break-word;
  white-space: normal;
}

tr td span {
  font-weight: 600;
}
</style>
