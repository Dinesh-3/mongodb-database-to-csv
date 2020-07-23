
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test', {useNewUrlParser: true, useUnifiedTopology: true });

const itemsSchema = {
    _id : Number,
    name : String,
    rating : String,
    RAM : Number,
    ROM : Number,
    price : Number
  };

productList = [{ "_id" : 1,
                "name": "Apple iPhone XR",
                "rating": 4.5,
                "RAM": 4,
                "ROM": 64,
                "price" : 52000},
            { "_id" : 2,
                "name": "Samsung Galaxy M30s",
                "rating": 4.3,
                "RAM": 4,
                "ROM": 64,
                "price" : 15000},
            {
                "_id" : 3,
                "name": "OPPO F11",
                "rating": 4.0,
                "RAM": 6,
                "ROM": 128,
                "price" : 17000                  
            },
            {
                "_id" : 4,
                "name": "Panasonic Eluga I8",
                "rating": 4.1,
                "RAM": 4,
                "ROM":64,
                "price" : 12000                  
            },   
            ]

const data = mongoose.model("data",itemsSchema)

insert = () => data.insertMany(productList, (err) => console.log(err));

module.exports = data;

