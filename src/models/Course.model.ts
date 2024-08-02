import mongoose, { Document, Schema } from 'mongoose';

interface ICourse extends Document {
  title: string;
  description: string;
  instructor: mongoose.Types.ObjectId;
  ratingsAverage: number;
  ratingsQuantity: number;
  price: number;
  category: string;
  subCategory: string;
  level: string;
  language: string;
  whatYouWillLearn: string[];
  requirements: string[];
  targetAudience: string[];
  isPublished: boolean;
  isFree: boolean;
  isApproved: boolean;
  isRejected: boolean;
  isFeatured: boolean;
  isTrending: boolean;
  isBestseller: boolean;
  coverImage: string;
  previewVideo: string;
  students: mongoose.Types.ObjectId[];
  createdAt: Date;
  updatedAt: Date;
}

const courseSchema = new Schema<ICourse>({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  instructor: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  ratingsAverage: {
    type: Number,
    default: 0
  },
  ratingsQuantity: {
    type: Number,
    default: 0
  },
  price: {
    type: Number,
    required: true
  },
  category: {
    type: String,
    required: true
  },
  subCategory: {
    type: String,
    required: true
  },
  level: {
    type: String,
    required: true
  },
  language: {
    type: String,
    required: true
  },
  whatYouWillLearn: {
    type: [String],
    required: true
  },
  requirements: {
    type: [String],
    required: true
  },
  targetAudience: {
    type: [String],
    required: true
  },
  isPublished: {
    type: Boolean,
    default: false
  },
  isFree: {
    type: Boolean,
    default: false
  },
  isApproved: {
    type: Boolean,
    default: false
  },
  isRejected: {
    type: Boolean,
    default: false
  },
  isFeatured: {
    type: Boolean,
    default: false
  },
  isTrending: {
    type: Boolean,
    default: false
  },
  isBestseller: {
    type: Boolean,
    default: false
  },
  coverImage: {
    type: String,
    required: true
  },
  previewVideo: {
    type: String,
    required: true
  },
  students: {
    type: [Schema.Types.ObjectId],
    ref: 'User',
    default: []
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  }
});

const Course = mongoose.model<ICourse>('Course', courseSchema);

export {Course};