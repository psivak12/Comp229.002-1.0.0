const mongoose = require('mongoose');
//const Schema = mongoose.Schema; 
const BusinessSchema = mongoose.Schema({
   name: String,
   number: String, 
   email: String, 
},
{
    collection: "business"
});
module.exports = mongoose.model('Business', BusinessSchema);
