const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const s1 = new Schema({
    _id:String,
    pass:String,
    username:String
});

const m1 = mongoose.model("user_table",s1);

module.exports = m1;
