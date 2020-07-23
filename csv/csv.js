
const createCsvWriter = require('csv-writer').createObjectCsvWriter;

const csvWriter = createCsvWriter({
    path: './data.csv',
    header: [
        {id : "_id", title : "_id" },
        {id : "name", title : "name"},
        {id : "rating", title : "rating"},
        {id : "RAM", title : "RAM"},
        {id : "ROM", title : "ROM"},
        {id : "price", title : "price"}
    ]
});

module.exports = csvWriter;