import PocketBase from "pocketbase"
import fs from "fs"
import csv from "csv-parser"

const pb = new PocketBase("https://mcq-db.dakakean.com")

async function importData() {
  fs.createReadStream("ddinter_downloads_code_A.csv")
    .pipe(csv())
    .on("data", async (row: any) => {
      try {
        await pb.collection("drug_interactions").create(row)
        console.log("Imported:", row)
      } catch (error) {
        console.error("Error importing:", row, error)
      }
    })
    .on("end", () => {
      console.log("CSV file successfully processed")
    })
}

importData()
