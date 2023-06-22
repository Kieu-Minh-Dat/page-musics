const mongoose = require('mongoose');


async function connect() {
    try{
        await mongoose.connect('mongodb://127.0.0.1/KMD', {
            useNewUrlParser: true,
            useUnifiedTopology : true,
            
        });
        
        console.log("thanh công");
    }
    catch(error){
        console.log("thất bại");
    }
}

module.exports = {connect}