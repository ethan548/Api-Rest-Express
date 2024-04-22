import mongoose from 'mongoose'

const dataBase = async() => {
    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+2.2.3', {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log("Database connected successfully!");  
    } catch (error) {
       console.log(error); 
    }
}
export default dataBase