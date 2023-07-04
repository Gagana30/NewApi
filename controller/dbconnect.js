let mongo = require('mongodb');
let {MongoClient} = require('mongodb');
// let mongoUrl = "mongodb://127.0.0.1:27017";

let mongoUrl = "mongodb+srv://gagana:2QeTGJRqQ2iNZa95@allbirdsdb.jywio13.mongodb.net/?retryWrites=true&w=majority";
let client = new MongoClient(mongoUrl)

async function dbconnection(){
    await client.connect();
}

let db = client.db('allBirds');

async function getdata(colname,query){
    let output = [];
    try{
        const cursor = db.collection(colname).find(query);
        for await(const data of cursor){
            output.push(data);
        }
        cursor.closed;
    } catch(err){
        output.push({"Error":"Error in getdata"})
    }
    return output
}


// postData
async function postData(colname,data){
    let output;
    try{
        output = await db.collection(colname).insertOne(data);
    }catch(err){
        output = {"response":"Error in postData"};
    }
    return output;
}

// update
async function updateSize(colName,condition,data){
    let output;
    try{
        output = await db.collection(colName).updateOne(condition,data)
    } catch(err){
        output = {"response":"Error in update data"}
    }
    return output;
}

module.exports = {
    dbconnection,
    getdata,
    postData,
    updateSize
}


