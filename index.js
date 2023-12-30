const express = require("express");
const cors = require("cors");

const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const app = express();
const port = process.env.PORT || 5000;

// middleaware

app.use(express.json())
app.use(cors())

// shahishawal
// CR4v2r6Kz1oc6dHa\
// shahishawal NmGHH6VQFqDQBoxk



const uri = "mongodb+srv://shahishawal:NmGHH6VQFqDQBoxk@cluster0.yi3i6gw.mongodb.net/?retryWrites=true&w=majority";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});


const dbConnect = async () => {
    try {
        client.connect()
        console.log('DB Connected Successfully✅')
    } catch (error) {
        console.log(error.name, error.message)
    }
  }
  dbConnect()






app.get("/",async(req, res)=>{
    res.send("Images server is Running")
})

app.listen(port,()=>{
    console.log(`Images server is Running ${port}`
    );
})