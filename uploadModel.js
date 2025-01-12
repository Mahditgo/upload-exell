const mongoose = require('mongoose');

const RecordsSchema = new mongoose.Schema({
    InvoiceNumber : {
        type : Number,
        required : true
    },
    InvoiceDate : {
        type : Date,
        required : true,

    },
    BuyerDetailCode : {
        type : Number,
        required : true
    },
    buyersName : {
        type : String,
        required : true
    },
    productCode : {
        type : Number,
        required : true
    },
    productName : {
        type : String,
        required : true
    },
    unit : {
        type : String,
        required : true
    },
    amount : {
        type : String,
        required : true
    },
    rate : {
        type : Number,
        required : true
    },
    salesAmount : {
        type : Number,
        required : true
    },
    AddedValue :{
        type : Number,
        required : true
    },

    finalAmount : {
        type : Number,
        required : true
    }


});

const Record = mongoose.model('Record', RecordsSchema);
module.exports = Record;