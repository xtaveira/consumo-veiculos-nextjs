import mongoose from "mongoose";

let isConnected = false;

export const connectToDb = async () => {
    console.log("try to connect to database")
    mongoose.set('strictQuery', true)

    if(isConnected){
        console.log("mongodb is already connected")
        return;
    }

    try {
        await mongoose.connect(process.env.MONGODB_URI, {
            dbName: "veiculos",
            useNewUrlParser: true,
            useUnifiedTopology: true
        })

        isConnected = true;

        console.log("mongodb is connected")

        

    } catch (error) {
        console.log(error)
    }
}