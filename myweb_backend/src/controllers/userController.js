import userService from "../services/userService";

let handleLogin = async (req, res) => {
    let email = req.body.email;
    let password = req.body.password;

    // lỗi thiếu trường
    if (!email || !password) {
        return res.status(500).json({
            errCode: 1,
            message : 'Missing input!'
        })
    }
    let userData = await userService.handleUserLogin(email, password)
    //access token : JWT jison web token => cơ chế bảo mật
    return res.status(200).json({
        errCode: userData.errCode,
        message: userData.errMessage,
        user : userData.user ? userData.user : {}
    })
}

let handleGetAllUsers = async (req, res) => {
    let id = req.query.id;

    if (!id) {
        return res.status(200).json({
            errCode: 1,
            errMessage: 'Missing required parameters',
            users: []
    })
}

    let users = await userService.getAllUsers(id)
    console.log(users)
    return res.status(200).json({
        errCode: 0,
        errMessage: 'ok',
        users
    })
}

let handleCreateUser = async (req, res) => {
    let message = await userService.createUser(req.body)
    return res.status(200).json(message)
}
let handleUpdateUser = async (req, res) => {
    let data = req.body
    if (!data.id) {
        return res.status(200).json({
            errCode: 1,
            errMessage : "Missing required parameters!"
        })
    } else {
        let message = await userService.updateUserData(data);
        return res.status(200).json(message)
    }
}

let handleDeleteUser = async (req, res) => {
    if (!req.body.id) {
        return res.status(200).json({
            errCode: 1,
            errMessage : "Missing required parameters!"
        })
    } else {
        let message = await userService.deleteUser(req.body.id)
        return res.status(200).json(message)
    }
}
module.exports = {
    handleLogin: handleLogin,
    handleGetAllUsers: handleGetAllUsers,
    handleCreateUser: handleCreateUser,
    handleUpdateUser: handleUpdateUser,
    handleDeleteUser: handleDeleteUser,
}