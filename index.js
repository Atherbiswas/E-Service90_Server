const express = require('express');
const cors = require('cors');
const { MongoClient, ServerApiVersion } = require('mongodb');
require('dotenv').config();
const app = express();
const port = process.env.PORT || 5000;

//middleware
app.use(cors());
app.use(express.json());

//mongodb cdn
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.SECURITY_KEY}@cluster0.ukuxru5.mongodb.net/?retryWrites=true&w=majority`;
console.log(uri)
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });




app.get('/', (req, res) => {
    res.send('E-service90 server is running')
});

app.listen(port, () => {
    console.log(`E-service90 running on : ${port}`)
})