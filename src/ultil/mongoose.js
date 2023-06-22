

module.exports = {

    mongooseToOject : (mongooses)=>{
        return mongooses.map(mongoose => mongoose.toObject())
    },

    mongooseToOject2 : (mongoose) =>{
        return mongoose ? mongoose.toObject() : mongoose
    }
}