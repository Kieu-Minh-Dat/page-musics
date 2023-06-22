const mongoose = require('mongoose');



const Schema = mongoose.Schema;
const pagemusic = new Schema({
    id: Number ,
    name:{ type: String , require: true,   },
    description: { type: String },
    image:{ type: String },
    video:{ type: String ,  require: true,  },
    level:{ type: String },
    // slug: { type: String, slug: 'name' ,  }
  }, {
    // _id: false,
    timestamps: true,
  });

  module.exports = mongoose.model('pagemusic', pagemusic);