import mongoose from 'mongoose';

const bodySchema = mongoose.Schema({ 
    username: {
        type: String,
        require: true
    },
    password: {
        type: String,
        require: true
    },
    fullname: {
        type: String,
        require: true
    }
});

const schema = mongoose.model('Schema', bodySchema);

export default schema;