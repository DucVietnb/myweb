import bcrypt from 'bcryptjs';
import db from '../models/index'

const salt = bcrypt.genSaltSync(10); // thuật toán để hash password 

let handleUserLogin = (email, password) => {
    return new Promise(async (resolve, reject) => {
        try {
            let userData = {};
            let userExist = await checkUserEmail(email);

            if (userExist) {
                let user = await db.user.findOne({
                    attributes : ['email', 'roleId', 'password'] ,
                    where: { email: email },
                    raw : true
                })

                if (user) {
                    let check = await bcrypt.compareSync(password, user.password)
                    //compare pass
                    if (check) {
                        userData.errCode = 0
                        userData.errMessage = `Ok`
                        
                        delete user.password
                        userData.user = user
                    } else {
                        userData.errCode = 3
                        userData.errMessage = `Wrong password!`
                    }

                } else {
                    userData.errCode = 2
                    userData.errMessage = `User isn't not found`
                }
            } else {
                userData.errCode = 1
                userData.errMessage = `Your email isn't exist. Please try other email!`
            }
            resolve(userData)
        } catch (e) {
            reject(e)
        }
    })
}
let checkUserEmail = (userEmail) => {
    return new Promise(async (resolve, reject) => {
        try {
            let user = await db.user.findOne({
                where: { email : userEmail}
            })
            if (user) {
                resolve(true)
            } else {
                resolve(false)
            }
        } catch (e) {
            reject(e)
        }
    })

}

let getAllUsers = (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            let users = ''
            if (id === 'ALL') {
                users = await db.user.findAll({
                    attributes: {
                        exclude: ['password']
                    }
                })
            }
            if (id && id !== 'ALL') {
                users = await db.user.findOne({
                    where: { id: id },
                    attributes: {
                        exclude: ['password']
                    }
                })
            }
            resolve(users)
        } catch (e) {
            reject(e)
        }
    })
}

let createUser = (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            let check = await checkUserEmail(data.email)
            if (check) {
                resolve({
                    errCode: 1,
                    errMessage: 'email exist!'
                })
            } else {
                let hashPasswordFromBcrypt = await hashUserPassword(data.password)
            await db.user.create( {
                email: data.email,
                password : hashPasswordFromBcrypt,
                fullName: data.fullName,
                address : data.address,
                phoneNumber : data.phoneNumber,
                gender : data.gender === '1' ? true : false,
                roleId : data.roleId,
            })
            resolve({
                errCode: 0,
                errMessage: 'ok'
            })
            }  
        } catch (e) {
            reject(e)
        }
    })

}
let hashUserPassword = (password) => {
    return new Promise(async (resolve, reject) => {
        try {
        let hashPassword = bcrypt.hashSync(password, salt);
        resolve(hashPassword);
            
        } catch (e) {
            reject(e)
        }
    })
}

let deleteUser = (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            let user = await db.user.findOne({
                where: { id: id },
            })
            if (user) {
                db.user.destroy({
                where: { id: id }
                });
                resolve({
                    errCode: 0,
                    errMessage: "Success"
                })
            } else {
                resolve({
                    errCode: 2,
                    errMessage: "No user found!"
                })
            }
        } catch (e) {
            reject(e)
        }
    })
}

let updateUserData = (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            let user = await db.user.findOne({
                where: { id: data.id },
                raw : false
            })
            if(user) {
                user.fullName = data.fullName;
                user.address = data.address;
                user.phoneNumber = data.phoneNumber;
                await user.save();
                resolve({
                    errCode: 0,
                    errMessage: "Success"
                });
            } else {
                resolve({
                    errCode: 2,
                    errMessage: "No user found!"
                })
            }
        } catch (e) {
            reject(e)
        }
    })
}
module.exports = {
    handleUserLogin: handleUserLogin,
    getAllUsers: getAllUsers,
    createUser: createUser,
    deleteUser: deleteUser,
    updateUserData: updateUserData,
    
}