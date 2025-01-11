<template>
  <div>
    <!-- Header and Add Button -->
    <div class="sm:flex sm:items-center print-hide">
      <div class="sm:flex-auto">
        <h1 class="text-base font-semibold leading-6 text-gray-900">Drugs</h1>
        <p class="mt-2 text-sm text-gray-700">
          A list of drugs for the prescription
        </p>
      </div>
      <div class="mt-4 sm:ml-16 sm:mt-0 sm:flex-none">
        <button
          type="button"
          class="block rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          @click="$emit('open-create-modal')"
        >
          Add Drug
        </button>
      </div>
    </div>

    <!-- Table -->
    <div class="mt-8 flow-root">
      <div class="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div class="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
          <table class="min-w-full border divide-y divide-gray-300">
            <thead class="bg-white">
              <tr>
                <th
                  scope="col"
                  class="py-3.5 px-4 text-left text-sm font-semibold text-gray-900"
                >
                  #
                </th>
                <th
                  scope="col"
                  class="py-3.5 px-4 text-left text-sm font-semibold text-gray-900"
                >
                  Name
                </th>
                <th
                  scope="col"
                  class="py-3.5 px-4 text-left text-sm font-semibold text-gray-900"
                >
                  Brand
                </th>
                <th
                  scope="col"
                  class="py-3.5 px-4 text-left text-sm font-semibold text-gray-900"
                >
                  Dose
                </th>
                <th
                  scope="col"
                  class="py-3.5 px-4 text-left text-sm font-semibold text-gray-900"
                >
                  When
                </th>
                <th
                  scope="col"
                  class="py-3.5 px-4 text-left text-sm font-semibold text-gray-900"
                >
                  Frequency
                </th>
                <th
                  scope="col"
                  class="py-3.5 px-4 text-left text-sm font-semibold text-gray-900"
                >
                  Duration
                </th>
                <th scope="col" class="relative py-3.5 px-4 print-hide">
                  <span class="sr-only"> Edit </span>
                </th>
              </tr>
            </thead>
            <tbody
              class="bg-white col-span-12"
              v-for="(drug, index) in drugs"
              :key="drug.id"
            >
              <tr class="border-t border-gray-300">
                <td class="px-4 pt-2 text-sm">{{ index + 1 }}</td>
                <td class="px-4 pt-2 text-sm">{{ drug.name }}</td>
                <td class="px-4 pt-2 text-sm">{{ drug.brand }}</td>
                <td class="px-4 pt-2 text-sm">{{ drug.dose }}</td>
                <td class="px-4 pt-2 text-sm">{{ drug.when }}</td>
                <td class="px-4 pt-2 text-sm">{{ drug.frequency }}</td>
                <td class="px-4 pt-2 text-sm">{{ drug.duration }}</td>
                <td class="print-hide">
                  <a
                    href="#"
                    @click.prevent="$emit('open-edit-modal', drug)"
                    class="text-indigo-600 hover:text-indigo-900"
                  >
                    Edit
                  </a>
                </td>
              </tr>
              <tr v-if="drug.note">
                <td
                  colspan="12"
                  class="px-2 py-2 text-sm font-semibold text-gray-900 sm:pl-3 border-b-4 text-center"
                >
                  {{ drug.note }}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  drugs: Array,
})
const emit = defineEmits(["open-create-modal", "open-edit-modal"])
</script>
