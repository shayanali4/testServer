import express from 'express';
import expressAsyncHandler from 'express-async-handler';
import bcrypt from 'bcryptjs';
import User from '../models/userModel.js';
import { generateToken } from '../utils.js';
import data from '../data.js';


const userRouter = express.Router();

userRouter.get('/seed', expressAsyncHandler(async (req, res) => {
    const createdUsers = await User.insertMany(data.users);
    res.send({ createdUsers });
    // const users = await User.find({});
    // res.send({ users });    
}));

userRouter.get('/all', expressAsyncHandler(async (req, res) => {
    const users = await User.find({});
    res.send({ users });    
}));

userRouter.post('/signin', expressAsyncHandler(async (req, res) => {
    const user = await User.findOne({ email: req.body.email });
    console.log("user",user)
    if (user) {
        if (bcrypt.compareSync(req.body.password, user.password)) {
            res.send({
                _id: user._id,
                name: user.name,
                email: user.email,
                token: generateToken(user),
            });
        return;
        }
    }
    res.status(401).send({
        message: 'Invalid email or password'});
    })
);

userRouter.post('/register', expressAsyncHandler(async (req, res) => {
    const user = new User({
        name: req.body.name,
        email: req.body.email,
        password: bcrypt.hashSync(req.body.password, 8),
        gender: req.body.gender,
        birthDate: req.body.birthDate,
        profession: req.body.profession,
        loginType: "Email/Password",
    });
    const createdUser = await user.save();
    res.send({
        _id: createdUser._id,
        name: createdUser.name,
        email: createdUser.email,
        loginType: user.loginType,
        token: generateToken(createdUser),
    });
}));

userRouter.post('/facebookLogin', expressAsyncHandler(async (req, res) => {
    const user = await User.findOne({ email: req.body.email });
    if (user) {
        res.send({
            _id: user._id,
            name: user.name,
            email: user.email,
            loginType: user.loginType,
            token: generateToken(user),
        });        
    } else {
        const newUser = new User({
            name: req.body.name,
            email: req.body.email,
            loginType: 'facebook'
        });
        const createdUser = await newUser.save();
    console.log(createdUser);

        res.send({
                _id: createdUser._id,
                name: createdUser.name,
                email: createdUser.email,
                loginType: createdUser.loginType,
                token: generateToken(createdUser),
            });
        }
}));

userRouter.post('/googleLogin', expressAsyncHandler(async (req, res) => {
    const user = await User.findOne({ email: req.body.email });
    if (user) {
        res.send({
            _id: user._id,
            name: user.name,
            email: user.email,
            loginType: user.loginType,
            token: generateToken(user),
        });        
    } else {
        const newUser = new User({
            name: req.body.name,
            email: req.body.email,
            loginType: "google",
            // password: bcrypt.hashSync(req.body.password, 8)
        });
        const createdUser = await newUser.save();
    console.log(createdUser);

    res.send({
            _id: createdUser._id,
            name: createdUser.name,
            email: createdUser.email,
            loginType: createdUser.loginType,
            token: generateToken(createdUser),
        });
    }
}));



export default userRouter;