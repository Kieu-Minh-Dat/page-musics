const express = require('express')
const router = express.Router()

const mecontrollers = require('../app/controllers/mecontrollers')

router.get('/list/music',mecontrollers.showme)

module.exports = router