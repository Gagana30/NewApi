let express = require('express');
let app = express();
let port = process.env.PORT||1995;
let Mongo = require('mongodb');
const bodyParser = require('body-parser');
const cors = require('cors');
let {dbconnection,getdata,postData,updateOrder,login} = require('./controller/dbconnect');


// middlewear
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}))
app.use(cors());

app.get('/',(req,res)=>{
    res.send('hii from express to gagana')
})

app.get('/mainPage',async (req,res)=>{
    let query = {}
    let collection = "mainPage";
    let output = await getdata(collection,query);
    res.send(output);
})
app.get('/userInfo',async (req,res)=>{
    let query = {}
    let collection = "login";
    let output = await getdata(collection,query);
    res.send(output);
})
app.post('/login',async(req,res) => {
    let query = {};
    if(req.query.password===password){
        res.send("Successfully LogedIn")
    }else{
        res.send("Invalid Information")
    }
    let collection = "login";
    let output = await login(collection,query);
    res.send(output);
})
app.post('/register',async (req,res) => {
    let data = req.body;
    let collection = "login";
    let response = await postData(collection,data);
    res.send(response);
})

app.get('/ordering',async (req,res)=>{
    let query = {}
    let collection = "ordering";
    let output = await getdata(collection,query);
    res.send(output);
})
// ///////////////////////////////////////////////////////////////////////
app. get('/MEveryday/:id',async (req, res) => {
    let id = Number(req.params.id);
    let query = {Everyday_Id:id};
    let collection = "ordering";
    let output = await getdata(collection,query);
    res.send(output);
})
app. get('/MActive/:id',async (req, res) => {
    let id = Number(req.params.id);
    let query = {Active_Id:id};
    let collection = "ordering";
    let output = await getdata(collection,query);
    res.send(output);
})
app. get('/MTree/:id',async (req, res) => {
    let id = Number(req.params.id);
    let query = {Tree_Id:id};
    let collection = "ordering";
    let output = await getdata(collection,query);
    res.send(output);
})
app. get('/MWool/:id',async (req, res) => {
    let id = Number(req.params.id);
    let query = {Wool_Id:id};
    let collection = "ordering";
    let output = await getdata(collection,query);
    res.send(output);
})

// *************************************
app. get('/WEvery/:id',async (req, res) => {
    let id = Number(req.params.id);
    let query = {WomenEveryday_Id:id};
    let collection = "ordering";
    let output = await getdata(collection,query);
    res.send(output);
})
app. get('/WActive/:id',async (req, res) => {
    let id = Number(req.params.id);
    let query = {WomenActive_Id:id};
    let collection = "ordering";
    let output = await getdata(collection,query);
    res.send(output);
})
app. get('/WTree/:id',async (req, res) => {
    let id = Number(req.params.id);
    let query = {WomenTree_Id:id};
    let collection = "ordering";
    let output = await getdata(collection,query);
    res.send(output);
})
app. get('/WWool/:id',async (req, res) => {
    let id = Number(req.params.id);
    let query = {WomenWool_Id:id};
    let collection = "ordering";
    let output = await getdata(collection,query);
    res.send(output);
})

// **************************************
app. get('/KEvery/:id',async (req, res) => {
    let id = Number(req.params.id);
    let query = {KidsEveryday_Id:id};
    let collection = "ordering";
    let output = await getdata(collection,query);
    res.send(output);
})
app. get('/KActive/:id',async (req, res) => {
    let id = Number(req.params.id);
    let query = {kidsActive_Id:id};
    let collection = "ordering";
    let output = await getdata(collection,query);
    res.send(output);
})
app. get('/KTree/:id',async (req, res) => {
    let id = Number(req.params.id);
    let query = {KidsTree_Id:id};
    let collection = "ordering";
    let output = await getdata(collection,query);
    res.send(output);
})
app. get('/KWool/:id',async (req, res) => {
    let id = Number(req.params.id);
    let query = {KidsWool_Id:id};
    let collection = "ordering";
    let output = await getdata(collection,query);
    res.send(output);
})
// ///////////////////////////////////////////////////////////////////////
app.get('/product',async (req,res)=>{
    let query = {};
    if(req.query.Everyday){
        query={Every: Number(req.query.Everyday)}
    }else if(req.query.Active){
        query={Active: Number(req.query.Active)}
    }else if(req.query.Tree){
        query={Tree: Number(req.query.Tree)}
    }else if(req.query.Wool){
        query={Wool: Number(req.query.Wool)}
    }else if(req.query.WEveryday){
        query={WEvery: Number(req.query.WEveryday)}
    }else if(req.query.WActive){
        query={WActive: Number(req.query.WActive)}
    }else if(req.query.WTree){
        query={WTree: Number(req.query.WTree)}
    }else if(req.query.WWool){
        query={WWool: Number(req.query.WWool)}
    }else if(req.query.KEveryday){
        query={KEvery: Number(req.query.KEveryday)}
    }else if(req.query.KActive){
        query={KActive: Number(req.query.KActive)}
    }else if(req.query.KTree){
        query={KTree: Number(req.query.KTree)}
    }else if(req.query.KWool){
        query={KWool: Number(req.query.KWool)}
    }else{
        query=[];
    }
    let collection = "product";
    let output = await getdata(collection,query);
    res.send(output);
})

app.put('/updateOrder',async(req,res) => {
    let collection = 'ordering';
    let condition = {"_id":new Mongo.ObjectId(req.body._id)}
    let data = {
        $set:{
            "Size":req.body.Size
        }
    }
    let output = await updateOrder(collection,condition,data)
    res.send(output)
})


app.post('/product', async(req,res) => {
if(Array.isArray(req.body.id)){
   let query={Everyday_Id:{$in:req.body.id}};
   let collection ='product';
let output =await getData(collection,query);
   res.send(output)
}else{ 
    res.send('send data');
   }
 })

app.get('/ordering',async (req,res)=>{
    let query = {};
     if(req.query.Every){
        query={Every: Number(req.query.Every)}
    }else if(req.query.Active){
        query={Active: Number(req.query.Active)}
    }else if(req.query.Tree){
        query={Tree: Number(req.query.Tree)}
    }else if(req.query.Wool){
        query={Wool: Number(req.query.Wool)}
    }else if(req.query.WEvery){
        query={WEvery: Number(req.query.WEvery)}
    }else if(req.query.WActive){
        query={WActive: Number(req.query.WActive)}
    }else if(req.query.WTree){
        query={WTree: Number(req.query.WTree)}
    }else if(req.query.WWool){
        query={WWool: Number(req.query.WWool)}
    }else if(req.query.KEvery){
        query={KEvery: Number(req.query.KEvery)}
    }else if(req.query.KActive){
        query={KActive: Number(req.query.KActive)}
    }else if(req.query.KTree){
        query={KTree: Number(req.query.KTree)}
    }else if(req.query.KWool){
        query={KWool: Number(req.query.KWool)}
    }else{
        query=[];
    }
    let collection = "ordering";
    let output = await getdata(collection,query);
    res.send(output);
})


app.get('/womenPage',async (req,res)=>{
    let query = {};
    let collection = "womenPage";
    let output = await getdata(collection,query);
    res.send(output);
})

app.get('/kidsPage',async (req,res)=>{
    let query = {};
    let collection = "kidsPage";
    let output = await getdata(collection,query);
    res.send(output);
})
app.get('/view',async(req,res) => {
    let query = {};
    let collection = "orderView";
    let output = await getdata(collection,query);
    res.send(output);
})
app.post('/orderView',async (req,res) => {
    let data = req.body;
    let collection = "orderView";
    let response = await postData(collection,data);
    res.send(response);
})

app.get('/orderedDetails',async (req,res)=>{
    let query = {}
    if(req.query.Shoes_Id){
        query={Shoes_Id: Number(req.query.Shoes_Id)}
    }else if(req.query.BestSellers_Id){
        query={BestSellers_Id: Number(req.query.BestSellers_Id)}
    }else{
        query = {}
    }
    let collection = "orderedDetails";
    let output = await getdata(collection,query);
    res.send(output);
})

app.get('/fullDetails',async (req,res)=>{
    let query = {}
    let collection = "fullDetails";
    let output = await getdata(collection,query);
    res.send(ShoesId);
})
// postData
app.post('/orderedDetails',async (req,res)=> {
    let data = req.body;
    let collection = "orderedDetails";
    let response = await postData(collection,data);
    res.send(response);
})

app.listen(port,(err,data)=>{
    dbconnection()
    if(err) throw err;
    console.log('server is runing on port ${port}')
})

