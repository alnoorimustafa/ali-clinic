interface DrugLabelResponse {
  results?: {
    warnings?: string[]
    pregnancy_or_breast_feeding?: string[]
    // Add other relevant properties as needed
  }[]
  // Add other properties that are returned from the api, such as meta.
  meta?: any
}

export async function checkDrugExists(name: string) {
  try {
    const url = `https://api.fda.gov/drug/label.json?api_key=OXSQicJ8Wy9yFRRTYpUUetLJbIBgMVhFDLARTgKi&search=openfda.generic_name:"${name}"`
    const response: DrugLabelResponse = await $fetch(url)
    if (response.results && response.results.length > 0) {
      return true
    } else {
      return false
    }
  } catch (error) {
    return false
  }
}

export function useDrugWarnings() {
  const warnings: Ref<string[]> = ref([])
  const pregnancyWarnings: Ref<string[]> = ref([])
  const loading = ref(false)
  const error = ref<string | null>(null)

  async function fetchDrugWarnings(drugName: string) {
    warnings.value = []
    pregnancyWarnings.value = []
    loading.value = true
    error.value = null

    const url = `https://api.fda.gov/drug/label.json?api_key=OXSQicJ8Wy9yFRRTYpUUetLJbIBgMVhFDLARTgKi&search=openfda.generic_name:"${drugName}"`

    try {
      const response: DrugLabelResponse = await $fetch(url)

      if (response && response.results && response.results.length > 0) {
        const firstResult = response.results[0]

        if (firstResult["pregnancy_or_breast_feeding"]) {
          pregnancyWarnings.value.push(
            ...firstResult["pregnancy_or_breast_feeding"]
          )
        } else {
          pregnancyWarnings.value.push(
            "No specific pregnancy or breast feeding warnings found in the label."
          )
        }

        if (firstResult.warnings) {
          warnings.value.push(...firstResult.warnings)
        } else {
          warnings.value.push("No specific warnings found in the label.")
        }
      } else {
        error.value = `Drug label not found for ${drugName}.`
      }
    } catch (e) {
      error.value = `Error fetching data for ${drugName}: ${
        (e as Error).message
      }`
    } finally {
      loading.value = false
    }
  }

  return {
    warnings,
    pregnancyWarnings,
    loading,
    error,
    fetchDrugWarnings,
    checkDrugExists,
  }
}
