import express from 'express';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import multer from 'multer';
import userSchema from '../models/UserSchema.js'; // Use the correct model

const router = express.Router();

// User Signup
router.post('/signup', async(req, res) => {
    try {
        const { name, email, password } = req.body;
        let user = await userSchema.findOne({ email }); // Use UserSchema here

        if (user) return res.status(400).json({ msg: 'User already exists' });

        const hashedPassword = await bcrypt.hash(password, 10);
        user = new userSchema({ name, email, password: hashedPassword }); // Use UserSchema here

        await user.save();
        res.status(201).json({ msg: 'User registered successfully' });
    } catch (err) {
        res.status(500).json({ msg: 'Server error' });
    }
});

// User Login
router.post('/login', async(req, res) => {
    try {
        const { email, password } = req.body;
        const user = await userSchema.findOne({ email }); // Use UserSchema here

        if (!user) return res.status(400).json({ msg: 'User not found' });

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) return res.status(400).json({ msg: 'Invalid credentials' });

        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });

        res.json({ token, userId: user._id });
    } catch (err) {
        res.status(500).json({ msg: 'Server error' });
    }
});



export default router;