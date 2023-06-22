
const music = require('../models/pagemucsic')
const {mongooseToOject} = require('../../ultil/mongoose')

class sidecontrollers {
    home(req, res , next){
        music.find({})
        .then(showmusic=> res.render('home', {
            showmusic: mongooseToOject(showmusic)
        }))
        .catch(next)
    }
}


module.exports = new sidecontrollers()