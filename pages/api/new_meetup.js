import { MongoClient } from "mongodb";

async function handler(req,res){
    if(req.method==='POST'){
        const data = req.body;

       // const client = await MongoClient.connect('mongodb://localhost:27017/Meetups');
       const client = await MongoClient.connect('mongodb+srv://parvadave109:HIHTX9teRMODop3O@cluster0.371ysxq.mongodb.net/Meetups?retryWrites=true&w=majority');
       
       const db = client.db();
        const meetupsCollection = db.collection('meetups');
        const result = await meetupsCollection.insertOne(data);
        client.close();
        res.status(201).json({message:"Meetup inserted"});
    }
}

export default handler;