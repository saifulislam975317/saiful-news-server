const express = require('express')
const cors = require('cors')

const app = express()

app.use(cors())

const port = process.env.PORT || 5000
const categories = require('./data/categories.json')

app.get('/',(req,res)=>{
    res.send('api is calling')
})
app.get('/categories',(req,res)=>{
    res.send(categories)
})

app.listen(port,()=>[
    console.log('server is running', port)
])