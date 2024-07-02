import express from 'express';
import dotenv from 'dotenv';
import dbConfig from './config/dbConfig.js';
import userLogin from './routes/userLogin.js'
import userRegister from './routes/userRegistration.js'
import cors from "cors";


//express configuration
dotenv.config();
const app = express();
app.use(cors());
const port = process.env.PORT || 5000;

app.use(express.json());





//Routs
app.use('/api', userLogin)
app.use('/api', userRegister)




//mongo DB connection
dbConfig.dbConnection();

app.listen(port, () => {
    console.log(`Server running on port ${port}`
    );
});


