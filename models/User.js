import mongoose from 'mongoose';

/* 
    Module contains the schema for creating
    a new user in the DB
*/

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please add a name!'],
    },
    email: {
        type: String,
        required: [true, 'Please provide an email!'],
        unique: [true, 'Please provide a unique email!'],
    },
    password: {
        type: String,
        required: [true, 'Please provide a password!'],
    },
    refreshToken: { // Will be refreshed after every login, user update, etc., or after 1+ week of inactivity
        type: String,
        required: [true, 'Please provide a refresh token']
    }
});

module.exports = mongoose.models.UserSchema || 
                    mongoose.model('User', UserSchema);