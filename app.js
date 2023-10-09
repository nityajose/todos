const Express=require("express")
const Bodyparser=require("body-parser")
const Cors=require("cors")
const Mongoose=require("mongoose")
const todoModel = require("./todoModel/todoModel")

var app= Express()

app.use(Cors())
app.use(Bodyparser.json())
app.use(Bodyparser.urlencoded({extended:true}))



Mongoose.connect("mongodb+srv://nithya:college345@cluster0.vcc79da.mongodb.net/?retryWrites=true&w=majority",{useNewUrlParser:true})


app.get("/",(req,res)=>{

    res.send("welcome to todo app")
})

app.post("/add",async(req,res)=>{

    let data=new todoModel(req.body)
    console.log(data)
    await data.save()
   


    res.send(data)
})

app.post("/delete",(req,res)=>{

    res.send("delete todo")
})

app.get("/viewall",(req,res)=>{

    res.send("viewall todo")
})

app.listen(3000)