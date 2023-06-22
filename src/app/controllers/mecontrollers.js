const users = require('../models/sever')
const music = require('../models/pagemucsic')
const {mongooseToOject} = require('../../ultil/mongoose')
class mecontrollers {
showme(req, res,next){
    music.find({})
    .then(melistmusic => res.render('me/list-music',{
        melistmusic : mongooseToOject(melistmusic)
    }))
    }

  
}


module.exports = new mecontrollers()