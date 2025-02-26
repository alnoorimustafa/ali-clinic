import { useLocalStorage } from "@vueuse/core"

const drugList = useLocalStorage("drugList", [])

export function useDrugStore() {
  return { drugList }
}
