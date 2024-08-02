import { Schema, model } from 'mongoose';

const UserSchema = new Schema({
    FirstName: { type: String,  required: true, },
    LastName: {type: String, required: true,},
    email : { type: String, require: true, index:true, unique:true,sparse:true},
    Password: { type: String,  required: true,},
    role:{type: String, enum: ["job seeker","admin","employer"],default: "job seeker"},

   
} );


const UserModel = model('User', UserSchema);
export default UserModel;