const {
    User
} = require('../models');

//-- Create User (Sign Up)
function signup(req, res, next) {
    const data = {
        username: req.body.username,
        password: req.body.password,
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
    const data = {
        username: req.body.username,
        password: req.body.password,
        email: req.body.email,
        fullname: req.body.fullname,
        picture: req.body.picture,
        bio: req.body.bio,
        updatedAt: new Date(),
        updatedBy: 0,
        isDeleted: false
    }

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
                if (user.password == req.body.password) {
                    res.status(200).json({
                        message: 'Successfully',
                        data: user
                    });
                }else {
                    res.status(401).json({
                        message: 'Wrong Password',
                        data: user
                    });
                }
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