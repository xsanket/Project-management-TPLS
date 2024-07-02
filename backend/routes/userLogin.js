import express from 'express';
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import userModel from '../models/userModel.js';


const router = express.Router();


router.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body;
        console.log(req.body)
        //check all are filled or not
        if (!email || !password) {
            return res.status(400).json({
                message: "all fields are mandatory"
            })
        }

        //check user exist or not
        const user = await userModel.findOne({ email });
        if (!user) {
            return res.send({
                success: false,
                message: "User not found"
            })
        }
        //console.log(user)

        //compare the password
        const isPasswordValid = await bcrypt.compare(password, user.password)
        if (!isPasswordValid) {
            return res.send({
                success: false,
                message: "Invalid Password"
            })
        }
        // console.log(isPasswordValid)
        //if everything matched gen jwt 
        const token = jwt.sign({ userId: user._id }, process.env.jwt_secret, { expiresIn: '7d' });

        //send the token in the response 
        res.send({
            success: true,
            token
        });




    } catch (error) {
        return res.status(500).send({
            success: false,
            message: "Login failed. Please try again",
        })
    }
});

export default router;