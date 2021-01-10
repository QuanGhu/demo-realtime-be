'use strict'

let mongoose = require('mongoose')
let Schema = mongoose.Schema

let UserSchema = new Schema({
    firstname: String,
    lastname: String,
}, {
    timestamps: true
})

let UserModel = mongoose.model('User', UserSchema)

module.exports = UserModel
