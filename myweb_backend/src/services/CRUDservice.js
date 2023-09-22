import bcrypt from 'bcryptjs';
import db from '../models/index'

const salt = bcrypt.genSaltSync(10); // thuật toán để hash password 

let createNewUser =async (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            let hashPasswordFromBcrypt = await hashUserPassword(data.password)
            await db.user.create( {
                email: data.email,
                password : hashPasswordFromBcrypt,
                fullName: data.fullName,
                address : data.address,
                phoneNumber : data.phoneNumber,
                gender : data.gender === '0' ? true : false,
                roleId : data.roleId === '0' ? true : false,
            })
            resolve('success')
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

let getAllUsers = () => {
    return new Promise( async (resolve, reject) => {
        try {
            let users = await db.user.findAll();
            resolve(users)
        } catch (e) {
            reject(e)
        }
    })
}

let getUserInforById = (userId) => {
    return new Promise( async (resolve, reject) => {
        try {
            let user = await db.user.findOne({
                where: { id: userId },
                raw : true
            })
            if(user) {
                resolve(user)
            } else {
                resolve({})
            }
        } catch (e) {
            reject(e)
        }
    })

}

let updateUserData = (data) => {
    return new Promise( async (resolve, reject) => {
        try {
            let user = await db.user.findOne({
                where: { id: data.id },
                raw : false
            })
            if(user) {
                user.fullName = data.fullName;
                user.address = data.address;
                user.phoneNumber = data.phoneNumber
                await user.save();
                resolve();
            } else {
                resolve()
            }
        } catch (e) {
            reject(e)
        }
    })
}

let deleteUser = (userId) => {
    return new Promise( async (resolve, reject) => {
        try {
            let user = await db.user.findOne({
                where: { id: userId },
                raw : false
            })
            if(user) {
                user.destroy();
                resolve()
            } else {
                resolve()
            }
        } catch (e) {
            reject(e)
        }
    })

}

module.exports = {
    createNewUser:createNewUser,
    getAllUsers:getAllUsers,
    getUserInforById:getUserInforById,
    updateUserData:updateUserData,
    deleteUser:deleteUser
}