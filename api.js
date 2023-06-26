let express = require('express');
let app = express();
let port = process.env.PORT||1995;
const bodyParser = require('body-parser');
const cors = require('cors');
let {dbconnection,getdata,postData} = require('./controller/dbconnect');


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

app.get('/product',async (req,res)=>{
    let query = {};
    if(req.query.Everyday_Id){
        query={Everyday_Id: Number(req.query.Everyday_Id)}
    }else if(req.query.Active_Id){
        query={Active_Id: Number(req.query.Active_Id)}
    }else if(req.query.Tree_Id){
        query={Tree_Id: Number(req.query.Tree_Id)}
    }else if(req.query.Wool_Id){
        query={Wool_Id: Number(req.query.Wool_Id)}
    }
    let collection = "product";
    let output = await getdata(collection,query);
    res.send(output);
})

app.get('/filter/:ShoesId', async(req,res) => {
    let ShoesId= req.params.ShoesId;
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

