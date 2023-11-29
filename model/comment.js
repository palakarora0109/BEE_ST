const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const commentSchema = new Schema(
    {
        Content:{type:String, required:true,length:1000},
        Author:{type:String, required:true},
        CreatedAt:{type:Date}
    }
);


module.exports = mongoose.model("comment", commentSchema);