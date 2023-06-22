const users = require('../models/sever')
const music = require('../models/pagemucsic')



class registercontrollers {
    register(req , res, next){
     
        res.render('users/register')//{layout: false}
        
}
login(req, res,next){
    res.render('users/login')
    // course.find({}, function (err,courses) {
    //     if(!err){
    //         res.json(courses)
    //     }else{
    //         res.status(400).json({error: 'loi'})
    //     }
        
    // })
}
store(req,res,next){
    users.create(req.body)
    .then(()=> res.redirect('login'))
    .catch(next)
        
    }

  
}


module.exports = new registercontrollers()