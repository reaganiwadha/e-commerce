const router = require('express').Router()
const UserController = require('../controller/UserController')

router.post('/register', UserController.register)
router.post('/login', UserController.login)


module.exports = router
