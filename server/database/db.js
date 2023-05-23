import mongoose from "mongoose"
import dotenv from "dotenv"

dotenv.config();

const URL = process.env.MONGO_URL

const Connection = async () =>{
    try{
        await mongoose.connect(URL,{useUnifiedTopology : true})
        console.log("Connected to Database")
    }catch(err){
        console.log("Database Connection unsuccessful ",err)
    }
}

export default Connection;