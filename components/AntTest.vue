<template>
  <a-select
    v-model:value="value"
    show-search
    placeholder="input search text"
    style="width: 200px"
    :default-active-first-option="false"
    :show-arrow="false"
    :filter-option="false"
    :not-found-content="null"
    :options="data"
    @search="handleSearch"
    @change="handleChange"
  ></a-select>
</template>

<script lang="ts" setup>
import aSelect from "ant-design-vue/es/select"

import { ref } from "vue"

let timeout: any
let currentValue = ""

/**
 * Native JSONP implementation
 * @param url The JSONP endpoint URL
 * @returns A promise that resolves with the JSONP response data
 */
function jsonpNative(url: string): Promise<any> {
  return new Promise((resolve, reject) => {
    const script = document.createElement("script")
    const callbackName = `jsonpCallback_${Date.now()}`
    const cleanUp = () => {
      delete (window as any)[callbackName]
      document.body.removeChild(script)
    }

    ;(window as any)[callbackName] = (data: any) => {
      resolve(data)
      cleanUp()
    }

    script.src = `${url}&callback=${callbackName}`
    script.onerror = () => {
      reject(new Error(`JSONP request to ${url} failed`))
      cleanUp()
    }

    document.body.appendChild(script)
  })
}

function fetch(value: string, callback: any) {
  if (timeout) {
    clearTimeout(timeout)
    timeout = null
  }
  currentValue = value

  function fake() {
    const params = new URLSearchParams({
      code: "utf-8",
      q: value,
    })
    const url = `https://suggest.taobao.com/sug?${params}`
    jsonpNative(url)
      .then((d) => {
        if (currentValue === value) {
          const result = d.result
          const data: any[] = []
          result.forEach((r: any) => {
            data.push({
              value: r[0],
              label: r[0],
            })
          })
          callback(data)
        }
      })
      .catch((err) => console.error(err))
  }

  timeout = setTimeout(fake, 300)
}

const data = ref<any[]>([])
const value = ref()

const handleSearch = (val: string) => {
  fetch(val, (d: any[]) => (data.value = d))
}
const handleChange = (val: string) => {
  console.log(val)
  value.value = val
  fetch(val, (d: any[]) => (data.value = d))
}
</script>
