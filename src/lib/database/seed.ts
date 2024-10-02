import { db } from "./index"
import { roles } from "./schemas"

const seed = async () => {
    console.log("Seeding database")

    const baseRole = await db.insert(roles).values({
        name: "USER"
    })

    console.log(baseRole)
}

seed().then(() => {
    console.log("Database seeded")
}).catch((error) => {
    console.error(error)
})