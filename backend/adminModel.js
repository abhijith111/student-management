import mongoose from 'mongoose';

const adminModel = mongoose.Schema({
    admin_name: {type: String, required: true},
    admin_password:{type: String, required: true},
    admin_signup_date: {type: Date, default: new Date()}  
})

export default mongoose.model('admin', adminModel);