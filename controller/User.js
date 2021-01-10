'use strict'

const UserModel = require('../model/User')

exports.get = async (req, res) => {
    try {
        const list = await UserModel.find()
        return res.status(200).json( {
            "status" : true,
            "message" : "Retrieve Data Successfully",
            "data" : list
        } )

    } catch (error) {
        return res.status(422).json( {
            "status" : false,
            "message" : "Retrieve Data Failed",
            "data" : null
        }  )
    }
}

exports.find = async (req, res) => {
    const { id } = req.body

    try {
        const user = await UserModel.findOne({_id : id})

        return res.status(200).json( {
            "status" : true,
            "message" : "Retrieve Data Successfully",
            "data" : user
        } )

    } catch (error) {
        return res.status(422).json( {
            "status" : false,
            "message" : "Retrieve Data Failed",
            "data" : null
        }  )
    }
}

exports.save = async (req, res) => {
    const { firstname, lastname } = req.body

    try {
        const newUser = new UserModel({
            firstname,
            lastname
        })

        const store = await newUser.save()

        return res.status(201).json( {
            "status" : true,
            "message" : "Save Data Successfully",
            "data" : store
        } )

    } catch (error) {
        return res.status(422).json( {
            "status" : false,
            "message" : "Save Data Failed",
            "data" : null
        }  )
    }
}

exports.update = async (req, res) => {
    const { id, firstname, lastname } = req.body

    try {
        
        const update = await UserModel.updateOne({ _id: id }, { firstname,lastname })
        const user = await UserModel.findOne({_id : id})

        return res.status(200).json( {
            "status" : true,
            "message" : "Update Data Successfully",
            "data" : user
        } )

    } catch (error) {
        return res.status(422).json( {
            "status" : false,
            "message" : "Update Data Failed",
            "data" : null
        }  )
    }
}