const express=require('express')
const mongoose=require('mongoose')
const router=require('./routes/product.route')
const app=express()

app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use('/api/products',router)

app.get('/',(req,res)=>{
    res.send('Hello from Node API Server Updated')
})

mongoose.connect('mongodb://localhost:27017/').then(()=>{
    console.log('Connected to database!')
    app.listen(3000,()=>{
        console.log('Server is running on port 3000')
    })
}).catch(()=>{
    console.log('Connection failed!')
})