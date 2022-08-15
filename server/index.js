import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

//routes 
import routes from './routes/routes.js';

const app = express();

app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ limit: '50mb', extended: true }));
app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));
app.use(cors());

const PORT = process.env.PORT || 5000;
const DATABASE = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@animefreak.y3mujo2.mongodb.net/?retryWrites=true&w=majority`;

app.use('/', routes);
app.get('/', (req,res)=>{
    res.send('working');
})

mongoose.connect(DATABASE, { useNewUrlParser: true, useUnifiedTopology: true  })
.then(()=> {
    app.listen(PORT, ()=> {
        console.log(`server running at port: ${PORT}`)
    })
}).catch(err => {
    console.log(err);
})







