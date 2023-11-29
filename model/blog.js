const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const blogSchema = new Schema(
    {
        Title:{type:String, required:true,length:250},
        Content:{type:String, required:true,length:5000},
        Author:{type:String, required:true},
        Tags:{type:Array,length:50},
        Comments:{type:Array,length:50}
    }
);


module.exports = mongoose.model("blog", blogSchema);
