'use strict'

const Router = require('express').Router()
const UserController = require('../controller/User')

Router.get('/list', UserController.get)
Router.post('/save', UserController.save)
Router.put('/update', UserController.update)
Router.post('/find', UserController.find)

module.exports = Router