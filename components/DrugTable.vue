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
                  class="whitespace-nowrap py-4 pl-2 pr-3 text-sm font-medium text-gray-900"
                >
                  {{ item }}
                </th>
              </tr>
            </thead>
          </table>
          <div v-for="(drug, id) in drugs" :key="drug.name">
            <table class="min-w-full divide-y divide-gray-300 row-table">
              <tbody class="divide-y divide-gray-200 bg-white mainTable">
                <tr>
                  <td
                    class="whitespace-nowrap py-2 pl-2 text-sm font-medium text-gray-900"
                  >
                    {{ id + 1 }}
                  </td>
                  <td
                    class="whitespace-nowrap py-2 pl-2 text-sm font-medium text-gray-900"
                  >
                    <span>{{ drug.name }}</span>
                  </td>
                  <td
                    class="whitespace-nowrap py-2 pl-2 text-sm font-medium text-gray-900"
                  >
                    <span>{{ drug.brand }}</span>
                  </td>
                  <td
                    class="whitespace-nowrap py-2 pl-2 text-sm font-medium text-gray-900"
                  >
                    <span>{{ drug.dose }}</span>
                  </td>
                  <td
                    class="whitespace-nowrap py-2 pl-2 text-sm font-medium text-gray-900"
                  >
                    <span>{{ drug.when }}</span>
                  </td>
                  <td
                    class="whitespace-nowrap py-2 pl-2 text-sm font-medium text-gray-900"
                  >
                    <span>{{ drug.frequency }}</span>
                  </td>
                  <td
                    class="whitespace-nowrap py-2 pl-2 text-sm font-medium text-gray-900"
                  >
                    <span>{{ drug.duration }}</span>
                  </td>
                </tr>
                <tr>
                  <td colspan="6" class="notes-row p-4">
                    {{ drug.notes }}
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
}
tr td,
tr th {
  text-align: left;
  width: 14.2%;
}
</style>
