import OpenAI from "openai"

const openai = new OpenAI({
  apiKey:
    "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",
  dangerouslyAllowBrowser: true, // Required for client-side requests
})

type Interaction = {
  summary: string
  severity: string
  mechanism: string
  recommendation: string
  sources: { name: string; url: string }[]
}

const interaction = ref<Interaction>({
  summary: "",
  severity: "",
  mechanism: "",
  recommendation: "",
  sources: [],
})

const parseResponse = (response: string) => {
  return {
    summary:
      response.match(/\*\*Summary:\*\*\s*(.+)/)?.[1] || "No summary found",
    severity:
      response.match(/\*\*Severity Level:\*\*\s*(.+)/)?.[1] || "Not specified",
    mechanism:
      response.match(/\*\*Mechanism:\*\*\s*(.+)/)?.[1] || "Not available",
    recommendation:
      response.match(/\*\*Clinical Recommendation:\*\*\s*(.+)/)?.[1] ||
      "No recommendation",
    sources: [...response.matchAll(/\[([^\]]+)\]\((https?:\/\/[^\)]+)\)/g)].map(
      (match) => ({
        name: match[1],
        url: match[2],
      })
    ),
  }
}

export const useDrugInteractions = () => {
  const error = ref<string | null>(null)
  const loading = ref(false)

  const checkInteraction = async (drugs: string[]) => {
    if (!drugs || drugs.length < 2) {
      error.value = "Please provide at least two drug names."
      return
    }

    loading.value = true
    error.value = null

    const prompt = `Check for drug interactions among the following medications: **${drugs.join(
      ", "
    )}**.
    
### **Instructions:**
- Use only authoritative medical sources such as **FDA, MedlinePlus, PubMed, RxList, or Drugs.com**.
- **DO NOT invent interactions** or speculate.
- If no interaction is found in trusted sources, explicitly state that.
- Provide links to relevant databases or studies when possible.

### **Expected Output Format:**
1. **Summary:** Briefly describe the interaction for all drugs(if any).
2. **Severity Level:** Mild, Moderate, or Severe.
3. **Mechanism:** Pharmacodynamic or pharmacokinetic explanation for all drugs mentioned.
4. **Clinical Recommendation:** What should be done? (e.g., Avoid, Dose Adjustment, Monitor).
5. **Sources:** Provide official links.

Now, analyze and provide an accurate response based on verified data.`

    try {
      const response = await openai.chat.completions.create({
        model: "gpt-4o-mini",
        messages: [
          {
            role: "system",
            content:
              "You are a clinical pharmacist providing accurate drug interaction data.",
          },
          { role: "user", content: prompt },
        ],
        max_tokens: 1000,
      })

      interaction.value = parseResponse(
        response.choices[0].message.content as string
      )
    } catch (err) {
      error.value = "Failed to fetch interaction data."
    } finally {
      loading.value = false
    }
  }

  return { checkInteraction, interaction, error, loading }
}
