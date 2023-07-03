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

