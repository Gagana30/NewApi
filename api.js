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
    if(req.query.ShoesCategory){
        query={ShoesCategory: Number(req.query.ShoesCategory)}
    }else if(req.query.BestSellers_Catagory){
        query={BestSellers_Catagory: Number(req.query.BestSellers_Catagory)}
    }else if(req.query.Tree_Id){
        query={Tree_Id: Number(req.query.Tree_Id)}
    }else if(req.query.Wool_Id){
        query={Wool_Id: Number(req.query.Wool_Id)}
    }
    let collection = "product";
    let output = await getdata(collection,query);
    res.send(output);
})

app.get('/ordering',async (req,res)=>{
    let query = {};
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
    res.send(output);
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

