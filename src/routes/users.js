const express = require('express');

const { firstMiddleware, secondMiddleware, triMiddleware } = require('../middleware')

const usersRouter = express.Router();

const userList = require('.././dummy/users.json');
const { HttpError, BadRequestError, UnauthorizedError, NotFoundError } = require('../errors');

// Methode Get /Get Request
usersRouter.get('/', triMiddleware(['user', 'admin']), (req, res) => {
    // throw new UnauthorizedError();
    res.status(200).send({ user: userList })
});

// Methode Get /Get Request By Params
// usersRouter.get('//:idUser', (req, res) => {
//   const id = req.params.idUser;
//   // const { idUser } = req.params;

//   const user = userList.filter(user => user.id === +id)[0];

//   if(!user){
//     res.status(404).send({message : 'user not found'})
//   }else{
//     res.send({ 'Name ': user })
//   }

// });

// Methode Get /Get Request By Query
usersRouter.get('/requestTable', (req, res) => {
    const { page, perPage } = req.query;
    const newUserList = Array.from(userList).splice((+page - 1) * (+perPage), +perPage);
    res.status(200).send({ users: newUserList })
})

//  Methode Get /Get Request By Params
usersRouter.get('/*', (req, res) => {

    const userParamsMap = ['id', 'email', 'age'];
    const arrayParams = req.params['0'].split('/');
    const params = {}
    arrayParams.forEach((p, index) => {
        params[userParamsMap[index]] = p;
    })
    const { id: userId } = params;
  
    const user = userList.filter(user => user.id === +userId)[0];
    if (!user) {
        throw new NotFoundError();
        // return res.status(404).send({ message: "User Not Found" })
    }

    res.status(200).send({ user })

})

// Methode post
usersRouter.post('/', triMiddleware('admin'), (req, res) => {
    const payload = req.body;
    payload.id = userList[userList.length - 1].id + 1;
    userList.push(payload);
    res.status(201).send({ data: payload })
})

//  Method Put
//  id => 1 -> params
//  req
//  cara satu dari params
usersRouter.put('/', (req, res) => {
    const { idUser } = req.params;
    const payload = req.body;
    // tanda (+) => untuk mengubah string menjadi int
    const indexOfUser = userList.findIndex(user => user.id === +idUser);
    if (indexOfUser === -1) {
        return res.status(404).send({ message: 'User Not Found !' })
    }
    const oldUser = userList[indexOfUser];
    userList[indexOfUser] = { id: oldUser.id, ...payload };
    res.status(201).send({ data: userList[indexOfUser] })
})

// cara dua dari request
usersRouter.put('/', (req, res) => {
    const payload = req.body;
    // tanda (+) => untuk mengubah string menjadi int
    const indexOfUser = userList.findIndex(user => user.id === +payload.id);
    if (indexOfUser === -1) {
        return res.status(404).send({ message: 'User Not Found !' })
    }
    const oldUser = userList[indexOfUser];
    // proses update
    userList[indexOfUser] = { id: oldUser.id, ...payload };
    res.status(201).send({ data: userList[indexOfUser] })
})

//  Method delete
usersRouter.delete('/*', (req, res) => {
    const userParamsMap = ['id', 'email', 'age'];
    const arrayParams = req.params['0'].split('/');
    const params = {}
    arrayParams.forEach((p, index) => {
        params[userParamsMap[index]] = p;
    })
    const { id: userId } = params;

    console.log(userId);
    
    const indexOfUser = userList.findIndex(user => user.id === +userId);
    if (indexOfUser === -1) {
        throw new NotFoundError();
        // return res.status(404).send({ message: 'user not found !' })
    }
    userList.splice(indexOfUser, 1);
    res.status(202).send({ message: 'user has been deleted !' })
})

module.exports = { usersRouter }