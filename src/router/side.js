const express = require('express')
const router = express.Router()

const sidecontrollers = require('../app/controllers/sidecontrollers')



router.get('/',sidecontrollers.home)





module.exports = router