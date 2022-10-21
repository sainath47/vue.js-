const express = require("express")
const cors = require('cors')
const morgan = require('morgan')

const app = express()
app.use(morgan("combined"))//use 
app.use(cors())
app.use(express.json())

app.get("/status",(req,res)=>{
    res.send({
        message:"hello world!"
    })
})

app.listen(3000,console.log("listening at 3000"))
