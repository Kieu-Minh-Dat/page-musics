

const Newregister = require('./register')
const Newside = require('./side')
const Newme = require('./me')
const Newrlistmusics = require('./listmusics')

function route(app) {
app.use('/listmusics',Newrlistmusics)
app.use('/me',Newme)
app.use('/home',Newside)
// app.use('/login',Newregister)
app.use('/',Newregister)
}

module.exports = route;

