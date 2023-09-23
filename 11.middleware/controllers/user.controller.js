const {
    User
} = require('../models');

const Validator = require("fastest-validator");
const v = new Validator();

const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
require('dotenv').config();
const JWT_SECRET = process.env.JWT_SECRET

//-- Create User (Sign Up)
function signup(req, res, next) {

    //-- Enkripsi Password
    bcrypt.genSalt(10, function(err, salt) {
        bcrypt.hash(req.body.password, salt, function(err, hash) {

            const data = {
                username: req.body.username,
                password: hash,
                email: req.body.email,
                fullname: req.body.fullname,
                picture: req.body.picture,
                bio: req.body.bio,
                createdAt: new Date(),
                updatedAt: new Date(),
                createdBy: 0,
                updatedBy: 0,
                isDeleted: false
            }
        
            const schema = {
                username: {type: "string", min: 3, max: 50, optional: false},
                email: {type: "email", optional: false},
                password: {type: "string", min: 5, max: 225, optional: false}
            }  
        
            //-- Validasi EMail
            User.findOne({ where: { email: req.body.email } }).then(user => {
                if (user) {
                    //--  Email SUdah Digunakan
                    res.status(400).json({
                        message: 'Email already exsist',
                    });
                }else {
                    //-- Email Belum Digunakan
        
                    //-- Validate Data
                    const validationResult = v.validate(data, schema);
        
                    if (validationResult !== true) {
                        //-- Data tidak valid
                        res.status(400).json({
                            message: 'Validation Falid',
                            data: validationResult
                        });
                    }else {                
                        //-- Create Email jika belum digunakan
                        //-- Data Valid dan bisa disimpan dalam data DB
                        User.create(data).then(result => {
                            res.status(200).json({
                                message: 'Successfully',
                                data: result
                            });
                        }).catch(err => {
                            res.status(500).json({
                                message: 'Register Failed',
                                data: err
                            });
                        });
                    }
                }
            }).catch(err => {
                res.status(500).json({
                    message: 'Something went wrong',
                    data: err
                });
            }); 

        });
    });       
};

//-- Read User
function read(req, res, next) {
    User.findAll({
        where: {
            isDeleted: false
        }
    }).then(users => {
        res.send(users);
    }).catch(err => {
        res.send(err);
    });
};

//-- Read User By ID
function readById(req, res, next) {
    /* cara pertama */
    // User.findAll({
    //     where: {
    //         id: req.params.id
    //     }
    // }).then(users => {
    //     res.send(users);
    // }).catch(err => {
    //     res.send(err);
    // });

    /* cara dua */
    const id = req.params.id;
    User.findByPk(id).then(users => {
        res.send(users);
    }).catch(err => {
        res.send(err);
    });
};

//-- Update User
function update(req, res, next) {

    bcrypt.genSalt(10, function(err, salt) {
        bcrypt.hash(req.body.password, salt, function(err, hash) {

            const data = {
                username: req.body.username,
                password: hash,
                email: req.body.email,
                fullname: req.body.fullname,
                picture: req.body.picture,
                bio: req.body.bio,
                updatedAt: new Date(),
                updatedBy: 0,
                isDeleted: false
            }
        
            const schema = {
                username: {type: "string", min: 3, max: 50, optional: false},
                email: {type: "email", optional: false},
                password: {type: "string", min: 5, max: 225, optional: false}
            }
            
            //-- Validate Data
            const validationResult = v.validate(data, schema);
        
            if (validationResult !== true) {
                //-- Data tidak valid
                res.status(400).json({
                    message: 'Validation Falid',
                    data: validationResult
                });
            }else {                
                //-- Create Email jika belum digunakan
                //-- Data Valid dan bisa disimpan dalam data DB
                User.update(data, { where: { id: req.params.id }}).then(result => {
                    res.status(200).json({
                        message: 'Successfully Update Data',
                        data: result
                    });
                }).catch(err => {
                    res.status(500).json({
                        message: 'Update Failed',
                        data: err
                    });
                });
            }

        });
    });     
};

//-- Delete User
function destroy(req, res, next) {
    /* Delete Record */
    // User.destroy({where: {id: req.params.id}}).then(result => {
    //     res.status(200).json({
    //         message: 'Successfully Delete Data',
    //         data: result
    //     });
    // }).catch(err => {
    //     res.status(500).json({
    //         message: 'Delete Failed',
    //         data: err
    //     });
    // });

    /* Soft Delete Record */
    
    const data = {        
        isDeleted: true,
        deletedAt: new Date(),
        deletedBy: 1
    }

    User.update(data, { where: { id: req.params.id }}).then(result => {
        res.status(200).json({
            message: 'Successfully Delete Data',
            data: result
        });
    }).catch(err => {
        res.status(500).json({
            message: 'Delete Failed',
            data: err
        });
    });
};

//-- Login User (Sign In)
function signin(req, res, next) {
    User.findOne({ where : {email: req.body.email }}).then(user => {
        if (user) {
            if(user.isDeleted == false) {

                bcrypt.compare(req.body.password, user.password, function(err, result) {                    
                    if (result) {

                        //  Pembuatakan Token saat Login Sukses
                        const token = jwt.sign({
                            email : user.email,
                            username : user.username,
                            userid : user.userid
                        }, JWT_SECRET, function(err, token) {
                            res.status(200).json({
                                status: "Success",
                                message: 'Successfully Login',
                                token: token,
                                JWT_SECRET: JWT_SECRET
                                // data: user
                            });
                        });
                        
                    }else {
                        res.status(401).json({
                            status: "Faild",
                            message: 'Wrong Password',
                            data: err
                        });
                    }
                });                
            }else {
                res.status(401).json({
                    message: 'User has been deleted',
                    data: user
                });
            }
        }else {
            res.status(401).json({
                message: 'User not found',
                data: user
            });
        }
    }).catch(err => {
        res.status(500).json({
            message: 'Login Failed',
            data: err
        });
    });
};

module.exports = {
    read,
    readById,
    update,
    destroy,
    signup,
    signin
};