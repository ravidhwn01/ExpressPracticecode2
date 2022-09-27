const express  = require("express");
const app = express();


const port = 5000;
app.get("/",(req,res)=>{
    res.write("this is out home page!😍😎😎😎\n")
    res.write("this is out home page!😍😎😎😎")
    res.send();
})
app.get("/about",(req,res)=>{
    res.status(200).send("this is out about page!😍😎😎😎")
})
app.get("/temp",(req,res)=>{
    res.json({
        id:4,
        name:"avi",
        author:null,
    })
})

app.listen(port,()=>{
    console.log("port no. 5000 in on......");
})