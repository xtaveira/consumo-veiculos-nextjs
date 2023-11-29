import clientPromise from "."

let client
let db 
let vehicles

async function init() {
    if(db) return
    try {
        client = await clientPromise
        db = await client.db()
        vehicles = await db.collection('vehicles')
    } catch (error) {
        throw new Error('failed to connect to database')
    }
}

;(async () => {
    await init()
})()

export async function getVehicles() {
    try {
        if(!movies) await init()
        const result = await vehicles.find({}).toArray()

        return { vehicles: result}
    } catch (error) {
        return {error: 'failed to fetch vehicles'}
    }
}