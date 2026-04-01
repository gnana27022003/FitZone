const express = require('express')
const app = express()
const mongoose = require('mongoose')
const path = require('path')
const dotenv = require('dotenv')
const cookieParser = require('cookie-parser')
const cors = require('cors')
dotenv.config()


app.set('view engine', 'ejs');

app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.use(cookieParser());
app.use(cors({
    origin:'http://localhost:5002',
    credentials:true
}))


mongoose.connect(process.env.MONGO_URI)
.then(()=>console.log('MongoDB Connected'))
.catch(err=>console.log('error',err))



app.use(express.static(path.join(__dirname,'views')))
app.use(express.static(path.join(__dirname,'css')))
app.use(express.static(path.join(__dirname,'imgs')))
app.use(express.static(path.join(__dirname,'views/admin')))

const route = require('./routers/route')
app.use(route)

const aroute = require('./routers/aroute')
app.use(aroute)

app.listen(process.env.PORT,()=>{
    console.log(`Server Running on http://localhost:${process.env.PORT}/home`)
})
