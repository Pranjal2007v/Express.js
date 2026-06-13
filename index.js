import express from 'express'
const app= express()


app.get('/', (res,req)=>{
    res.send("Hello World")
})
app.listen(3000,()=>{
    console.log("server running")
})