// libraries
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

// import schema 
import schema from '../../models/schema.js';

//users
export const getDatabase = async (req,res) => {
    try {
        const jsonData = await schema.find({});
        res.status(200).json(jsonData);
    } catch (error) {
        res.status(404).json({ message: error });
    }
}

export const signup = async (req,res) => {

    const { username, password, fullname } = req.body;

    try {
        const existing_user = await schema.findOne({ username});

        if(existing_user) return res.status(404).json({ message: 'user exist' });

        const hashed_pass = await bcrypt.hash(password, 12); 

        const result = await schema.create({ 
            username,
            password: hashed_pass,
            fullname
        });

        const token = await jwt.sign({ username: result.username, id: result._id}, process.env.SECRET_KEY,{ expiresIn: '1hr' });

        res.json({ result,token });

    } catch (error) {

        res.status(404).json(error);
        
    }
}


