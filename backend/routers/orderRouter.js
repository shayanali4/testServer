import express from 'express';
import expressAsyncHandler from 'express-async-handler';
import Order from '../models/orderModel.js';


const orderRouter = express.Router();

orderRouter.post('/place', expressAsyncHandler(async (req, res) => {
    const order = new Order({
        name: `${req.body.orderData.firstName} ${req.body.orderData.lastName}`,
        email: req.body.orderData.email,
        birthDate: req.body.orderData.birthDate,
        profession: req.body.orderData.profession,
        city: req.body.orderData.city,
        address: req.body.orderData.address,
        phone: req.body.orderData.phone,
        choosenResume: req.body.orderData.choosenResume,
    });
    // console.log(order);
    const createdOrder = await order.save();
    res.send({
        createdOrder
    });
}));




export default orderRouter;