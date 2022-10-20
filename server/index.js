const express = require('express')
require('dotenv').config()
const mongoose = require('mongoose');
const cors = require('cors');
const routes = require('./routes/index');
const errorHandler = require('./middleware/errorHandlingMiddleware');
const cookieParser = require('cookie-parser')

const app = express();
app.use(express.json());
app.use(cookieParser());
app.use(cors());
app.use('/api', routes);

// last handler Error 
app.use(errorHandler);

const start = async () => {
    try{
        console.log('\n');
        await mongoose.connect(process.env.DB_CONNECTLINK);
        console.log('\n');
        console.log(`✅ DB  connected`)
    
        app.listen(process.env.PORT_APP, ()=>{
            console.log(`✅ APP server       started at port ${process.env.PORT_APP}`)
        });
    }catch(e){
        console.log(e);
    }
}

start();