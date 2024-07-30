import mongoose, { Document, Schema } from 'mongoose';

// Define the TypeScript interface for the User document
interface IUser extends Document {
  name: string;
  email: string;
  password?: string;
  googleID?: string;
  role: string;
  avatar: string;
  verified: string;
  createdAt: Date | Number;
  updatedAt: Date | Number;
}

// Define the Mongoose schema
const userSchema: Schema<IUser> = new Schema({
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
userSchema.pre<IUser>('save', function (next) {
  this.updatedAt = Date.now();
  next();
});

// Create and export the model
const User = mongoose.model<IUser>('User', userSchema);

export {User};
