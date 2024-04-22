import mongoose from 'mongoose'
import config from './config.js';

const dataBase = async() => {
    try {
        await mongoose.connect(config.connection, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log("Database connected successfully!");  
    } catch (error) {
       console.log(error); 
    }
}
export default dataBase