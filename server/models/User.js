const mongoose = require('mongoose');

const addressSchema = new mongoose.Schema({
    state: String,
    city: String,
    pincode: String,
    phoneNumber: String,
    fullAddress: String,
});

const paymentSchema = new mongoose.Schema({
    cardNumber: { type: String, required: true },
    expiration: { type: String, required: true },  // MM/YY
    cvc: { type: String, required: true },
    nameOnCard: { type: String, required: true },
});

const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    phoneNumber: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    address: addressSchema,
    paymentDetails: paymentSchema,
}, { timestamps: true });

const User = mongoose.model('User', userSchema);
module.exports = User;
