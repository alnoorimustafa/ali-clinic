interface DrugLabelResponse {
  results?: {
    warnings?: string[]
    pregnancy_or_breast_feeding?: string[]
    indications_and_usage?: string[]
    do_not_use?: string[]
    ask_doctor?: string[]
    ask_doctor_or_pharmacist?: string[]
    stop_use?: string[]
    keep_out_of_reach_of_children?: string[]
    dosage_and_administration?: string[]
    storage_and_handling?: string[]
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
  const indications: Ref<string[]> = ref([])
  const doNotUse: Ref<string[]> = ref([])
  const askDoctor: Ref<string[]> = ref([])
  const askDoctorOrPharmacist: Ref<string[]> = ref([])
  const stopUse: Ref<string[]> = ref([])
  const keepOutOfReach: Ref<string[]> = ref([])
  const dosage: Ref<string[]> = ref([])
  const storage: Ref<string[]> = ref([])
  const loading = ref(false)
  const error = ref<string | null>(null)

  async function fetchDrugWarnings(drugName: string) {
    warnings.value = []
    pregnancyWarnings.value = []
    indications.value = []
    doNotUse.value = []
    askDoctor.value = []
    askDoctorOrPharmacist.value = []
    stopUse.value = []
    keepOutOfReach.value = []
    dosage.value = []
    storage.value = []
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

        if (firstResult["indications_and_usage"]) {
          indications.value.push(...firstResult["indications_and_usage"])
        } else {
          indications.value.push("No specific indications and usage found.")
        }

        if (firstResult["do_not_use"]) {
          doNotUse.value.push(...firstResult["do_not_use"])
        } else {
          doNotUse.value.push("No specific do not use information found.")
        }

        if (firstResult["ask_doctor"]) {
          askDoctor.value.push(...firstResult["ask_doctor"])
        } else {
          askDoctor.value.push("No specific ask doctor information found.")
        }

        if (firstResult["ask_doctor_or_pharmacist"]) {
          askDoctorOrPharmacist.value.push(
            ...firstResult["ask_doctor_or_pharmacist"]
          )
        } else {
          askDoctorOrPharmacist.value.push(
            "No specific ask doctor or pharmacist information found."
          )
        }

        if (firstResult["stop_use"]) {
          stopUse.value.push(...firstResult["stop_use"])
        } else {
          stopUse.value.push("No specific stop use information found.")
        }

        if (firstResult["keep_out_of_reach_of_children"]) {
          keepOutOfReach.value.push(
            ...firstResult["keep_out_of_reach_of_children"]
          )
        } else {
          keepOutOfReach.value.push(
            "No specific keep out of reach of children information found."
          )
        }

        if (firstResult["dosage_and_administration"]) {
          dosage.value.push(...firstResult["dosage_and_administration"])
        } else {
          dosage.value.push(
            "No specific dosage and administration information found."
          )
        }

        if (firstResult["storage_and_handling"]) {
          storage.value.push(...firstResult["storage_and_handling"])
        } else {
          storage.value.push(
            "No specific storage and handling information found."
          )
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
    indications,
    doNotUse,
    askDoctor,
    askDoctorOrPharmacist,
    stopUse,
    keepOutOfReach,
    dosage,
    storage,
    loading,
    error,
    fetchDrugWarnings,
    checkDrugExists,
  }
}
