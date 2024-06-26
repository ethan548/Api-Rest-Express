import mongoose from 'mongoose';
import bcrypt from 'bcryptjs'
mongoose.set('strictQuery', false);
const userSchema = new mongoose.Schema({
    username: {
        type: String,
        unique: true
    },
    email: {
        type: String,
        unique: true
    },
    password: {
        type: String
    },
    roles : [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Role'
    }]
},  {
    timestamps: true,
    versionKey: false
}
)
userSchema.statics.encryptPassword = async (password) => { // encriptar contraseña
    const salt = await bcrypt.genSalt(10)
    return await bcrypt.hash(password, salt)
}
userSchema.statics.comparePassword = async (password, receivedPassword) => { // comparar contraseña
    return await bcrypt.compare(password, receivedPassword)
}
export default mongoose.model('User', userSchema)