const express = require('express')
const cors = require('cors')
const app = express()
const PORT = process.env.PORT || 8080


const cart = [
    {
        id: "product1", 
            product: "apples", 
            price: "$1.99", 
            quantitiy: "4", 
    },
    {
        id: "product2", 
            product: "oranges", 
            price: "$1.99", 
            quantitiy: "5", 
    },
    {
        id: "product3", 
            product: "bananas", 
            price: "$.99", 
            quantitiy: "10", 
    },
]

app.use(cors())

app.get('/cart', (req, res) => { 
    res.send(cart)
})


app.listen(PORT, () => console.log('listening on port', PORT))