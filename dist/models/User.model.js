import mongoose, { Schema } from 'mongoose';
// Define the Mongoose schema
const userSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
    },
    googleID: {
        type: String,
    },
    role: {
        type: String,
        required: true,
    },
    avatar: {
        type: String,
        required: true,
    },
    verified: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
    updatedAt: {
        type: Date,
        default: Date.now,
    },
});
// Update the `updatedAt` field before saving
userSchema.pre('save', function (next) {
    this.updatedAt = Date.now();
    next();
});
// Create and export the model
const User = mongoose.model('User', userSchema);
export { User };
