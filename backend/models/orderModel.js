import mongoose from 'mongoose';

const orderSchema = new mongoose.Schema({
    name: { type: String},
    email: { type: String },
    loginType:{ type: String},
    password:{ type: String},
    gender:{ type: String},
    profession: { type: String },
    birthDate: { type: String },
    city: { type: String },
    address: { type: String },
    phone: { type: String },
    choosenResume: { type: String },
}, {
    timestamps: true,
});

const Order = mongoose.model('Orders', orderSchema);
export default Order;