const mongoose = require("mongoose");

const db = async ()=> {
        mongoose.set('strictQuery', false);
        await mongoose.connect(process.env.MONGO_URL);
    
}

module.exports = {db};