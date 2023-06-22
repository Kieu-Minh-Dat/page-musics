const express = require('express')
const router = express.Router()

const registercontrollers = require('../app/controllers/registercontollers')

router.post('/users/store',registercontrollers.store )
router.get('/users/login',registercontrollers.login )
router.get('/',registercontrollers.register )
module.exports = router