<template>
  <a-tree
    v-model:expandedKeys="expandedKeys"
    v-model:selectedKeys="selectedKeys"
    v-model:checkedKeys="checkedKeys"
    checkable
    :tree-data="treeData"
  >
    <template #title="{ title, key }">
      <span v-if="key === '0-0-1-0'" style="color: #1890ff">{{ title }}</span>
      <template v-else>{{ title }}</template>
    </template>
  </a-tree>
</template>
<script lang="ts" setup>
import { ref, watch } from "vue"
import type { TreeProps } from "ant-design-vue"
import aTree from "ant-design-vue/es/tree"

// const treeData: TreeProps["treeData"] = [
//   {
//     title: "drug1",
//     key: "0-0",
//     children: [
//       {
//         title: "dose1",
//         key: "0-0-0",
//         children: [
//           { title: "frequency1", key: "0-0-0-0" },
//           { title: "frequency", key: "0-0-0-1" },
//         ],
//       },
//       {
//         title: "dose2",
//         key: "0-0-1",
//         children: [{ key: "0-0-1-0", title: "frequency1" }],
//       },
//       {
//         title: "dose3",
//         key: "0-0-1",
//         children: [
//           {
//             key: "0-0-1-0",
//             title: "frequency1",
//             children: [
//               { key: "0-0-1-0-0", title: "when1" },
//               {
//                 key: "0-0-1-0-1",
//                 title: "when2",
//                 children: [
//                   { key: "0-0-1-0-1-0", title: "duration1" },
//                   {
//                     key: "0-0-1-0-1-0",
//                     title: "duration2",
//                     children: [
//                       { key: "0-0-1-0-1-0-0", title: "note1" },
//                       { key: "0-0-1-0-1-0-0", title: "note2" },
//                     ],
//                   },
//                 ],
//               },
//             ],
//           },
//         ],
//       },
//     ],
//   },
// ]

const treeData = [
  {
    title: "Paracetamol",
    key: "0-0",
    children: [
      {
        title: "500mg",
        key: "0-0-0",
        children: [
          { title: "Once a day", key: "0-0-0-0" },
          { title: "Twice a day", key: "0-0-0-1" },
        ],
      },
      {
        title: "1000mg",
        key: "0-0-1",
        children: [{ title: "Three times a day", key: "0-0-1-0" }],
      },
      {
        title: "750mg",
        key: "0-0-2",
        children: [
          {
            title: "Twice a day",
            key: "0-0-2-0",
            children: [
              { title: "Morning", key: "0-0-2-0-0" },
              {
                title: "Evening",
                key: "0-0-2-0-1",
                children: [
                  { title: "1 week", key: "0-0-2-0-1-0" },
                  {
                    title: "2 weeks",
                    key: "0-0-2-0-1-1",
                    children: [
                      { title: "Take with food", key: "0-0-2-0-1-1-0" },
                      {
                        title: "Take on an empty stomach",
                        key: "0-0-2-0-1-1-1",
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    title: "Ibuprofen",
    key: "0-1",
    children: [
      {
        title: "200mg",
        key: "0-1-0",
        children: [
          { title: "Once a day", key: "0-1-0-0" },
          { title: "Twice a day", key: "0-1-0-1" },
        ],
      },
      {
        title: "400mg",
        key: "0-1-1",
        children: [{ title: "Three times a day", key: "0-1-1-0" }],
      },
    ],
  },
  {
    title: "Amoxicillin",
    key: "0-2",
    children: [
      {
        title: "250mg",
        key: "0-2-0",
        children: [
          { title: "Twice a day", key: "0-2-0-0" },
          { title: "Three times a day", key: "0-2-0-1" },
        ],
      },
      {
        title: "500mg",
        key: "0-2-1",
        children: [
          {
            title: "Once a day",
            key: "0-2-1-0",
            children: [
              { title: "Morning", key: "0-2-1-0-0" },
              {
                title: "Evening",
                key: "0-2-1-0-1",
                children: [
                  { title: "5 days", key: "0-2-1-0-1-0" },
                  {
                    title: "10 days",
                    key: "0-2-1-0-1-1",
                    children: [
                      { title: "With water", key: "0-2-1-0-1-1-0" },
                      { title: "With milk", key: "0-2-1-0-1-1-1" },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
]

const expandedKeys = ref<string[]>(["0-0-0", "0-0-1"])
const selectedKeys = ref<string[]>(["0-0-0", "0-0-1"])
const checkedKeys = ref<string[]>(["0-0-0", "0-0-1"])
watch(expandedKeys, () => {
  console.log("expandedKeys", expandedKeys)
})
watch(selectedKeys, () => {
  console.log("selectedKeys", selectedKeys)
})
watch(checkedKeys, () => {
  console.log("checkedKeys", checkedKeys)
})
</script>
