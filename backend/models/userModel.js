import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    loginType:{type: String, required: true},
    password:{type: String},
    gender:{type: String},
    profession: { type: String },
    birthDate: {type:String},
}, {
    timestamps: true,
});

const User = mongoose.model('Users', userSchema);
export default User;