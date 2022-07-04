import { MongoClient} from "mongodb"

async function handler(req, res) {
    if(req.method === "POST") {
        const data = req.body;

        const client = MongoClient.connect("mongodb+srv://venlig:taleromto382BWQ@cluster0.hq9gh.mongodb.net/?retryWrites=true&w=majority")
    
        const db =  client.db();

        const meetCollection = db.collection("meets");

        const result = await meetCollection.insertOne(data);
    
        console.log(result)

        client.close()

        res.status(201).json({message: "Meet inserted"}) ;
    }
}

export default handler;