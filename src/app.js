 const express = require("express")
const app = express();
const path = express("path");
const hbs = require("hbs");
const staticPath = path.join(__dirname,"../public")
const templatePath = path.join(__dirname,"../templates")
const partialsPath = path.join(__dirname,"../templates/partials")

hbs.registerPartial(partialsPath);

app.get('*',(req,res)=>{
    res.render('404', {
        errorcoment:"oops page not found"
    })
})


app.use(express.static(staticPath))

app.listen(1000,()=>{
    console.log("listening the port num 1000");
})