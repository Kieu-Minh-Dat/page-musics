

const express = require('express')
const router = express.Router()

const listmusicscontrollers = require('../app/controllers/listmusicscontrollers')

router.post('/storemusic',listmusicscontrollers.storemusics)
router.get('/edit',listmusicscontrollers.edit)
router.get('/create',listmusicscontrollers.create)
router.get('/:slug',listmusicscontrollers.showmusics)

module.exports = router