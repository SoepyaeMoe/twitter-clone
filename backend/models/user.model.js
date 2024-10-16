import mongoose from "mongoose";
const userSchema = new mongoose.Schema({
    username: {
        type: String,
        unique: true,
        required: true
    },
    fullname: {
        type: String,
        required: true
    },
    email: {
        type: String,
        unique: true,
        required: true
    },
    password: {
        type: String,
        required: true,
    },
    followers: {
        type: [mongoose.Schema.Types.ObjectId],
        ref: 'User',
        default: []
    },
    following: {
        type: [mongoose.Schema.Types.ObjectId],
        ref: 'User',
        default: []
    },
    profileImg: {
        type: String,
        default: ''
    },
    likedPosts: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User'
        }
    ],
    coverImg: {
        type: String,
        default: ''
    },
    bio: {
        type: String,
        default: ''
    },
    link: {
        type: String,
        default: ''
    }
}, {
    timestamps: true
});

const User = mongoose.model('User', userSchema);

export default User;