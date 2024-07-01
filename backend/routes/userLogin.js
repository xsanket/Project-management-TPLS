import express from 'express';
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import userModel from '../models/userModel.js';


const router = express.Router();


router.post('/user-login', async (req, res) => {
    try {
        const { email, password } = req.body;

        //check all are filled or not
        if (!email || !password) {
            return res.status(400).json({
                error: "all fields are mandatory"
            })
        }

        //check user exist or not
        const user = await userModel.findOne({ email });
        if (!user) {
            return res.status(404).json({
                success: false,
                message: error.message
            })
        }

        //compare the password
        const isPasswordValid = await bcrypt.compare(password, user.password)
        if (!isPasswordValid) {
            return res.status(404).json({
                success: false,
                message: error.message
            })
        }

        //if everything matched gen jwt 
        const token = jwt.sign({ userId: user._id }, process.env.jwt_secret, { expiresIn: '7d' });

        //send the token in the response 
        res.status(200).json({
            success: true,
            token
        });




    } catch (error) {
        return res.status(500).send({
            success: false,
            message: error.message,
        })
    }
});

export default router;