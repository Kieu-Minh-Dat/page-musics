
const music = require('../models/pagemucsic')
const {mongooseToOject2} = require('../../ultil/mongoose')

class listmusicscontrollers {
    showmusics(req, res , next){
        music.findOne({})
        .then(showmusic => res.render('listmusics/showmusics', {
            showmusic : mongooseToOject2(showmusic)
        }))
    }
    create(req,res,next){
        res.render('listmusics/create')
    }

    storemusics(req,res,next){
        req.body.image = `https://i.ytimg.com/vi/${req.body.video}/hqdefault.jpg`
        const Music = new music(req.body)
        Music.save()
        .then(()=> res.send('ok nha'))
        .catch(next)
    }
    edit(req,res , next){
        res.render('me/list-music')
    }
}


module.exports = new listmusicscontrollers()