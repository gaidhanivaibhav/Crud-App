const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const studentSchema = new Schema({

    firstName :{
        type:String,
        required:true
    },
    lastName :{
        type:String,
          required:true
    },
    Due_Date:{
        type:Date,
          required:true
    }
    // password:{
    //     type:String
    // }
},{
collection:'students'}
);

module.exports = mongoose.model('studentSchema',studentSchema)