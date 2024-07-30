import mongoose, { Schema } from 'mongoose';
const courseSchema = new Schema({
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
const Course = mongoose.model('Course', courseSchema);
export { Course };
