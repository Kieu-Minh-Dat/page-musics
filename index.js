const morgan = require('morgan')
const express = require('express')
const handlebars = require ('express-handlebars');

const db = require ('./src/config/db/ending');

const app = express()
const port = 3000


const route = require('./src/router')




app.use(
  express.urlencoded({
      extended: true,
  }),
);
app.use(express.json());

db.connect()





app.use(morgan('combined'))
app.engine('hbs', handlebars.engine({
    extname: 'hbs'
}));
app.set('view engine', 'hbs');
app.set('views', './src/listmucsic/views');
route(app)
app.listen(port, () => {
  console.log(`Example app listening on port  http://localhost:${port}`)
})