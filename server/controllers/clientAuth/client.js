// import mongoose from 'mongoose';
import schema from '../../models/schema.js';

export const getDatabase = async (req,res) => {
    try {
        const jsonData = await schema.find({});
        res.status(200).json(jsonData);
    } catch (error) {
        res.status(404).json({ message: error });
    }
}