const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://jundihn:w2jsCxgeSTrqSmp8@cluster0.imdjvhn.mongodb.net/?appName=Cluster0";

if (!uri) {
    throw new Error("Uri is not defined bos")
}

export const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

export const database = client.db("gc2-next")
