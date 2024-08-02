import mongoose, { Schema } from 'mongoose';
// Resources Schema
const resourcesSchema = new Schema({
    title: { type: String, required: true },
    url: { type: String, required: true }
});
// Video URL Schema
const videoURLSchema = new Schema({
    _480p: { type: String },
    _720p: { type: String },
    _1080: { type: String }
});
// Lecture Schema
const lectureSchema = new Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    position: { type: Number, required: true },
    resources: [resourcesSchema],
    videoURL: videoURLSchema,
    duration: { type: Number, required: true },
    course: { type: Schema.Types.ObjectId, ref: 'Course', required: true },
    instructor: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    isPublished: { type: Boolean, required: true },
    isPreview: { type: Boolean, required: true },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now }
});
// Add pre-save hook to update updatedAt
lectureSchema.pre('save', function (next) {
    this.updatedAt = new Date();
    next();
});
const Lecture = mongoose.model('Lecture', lectureSchema);
const Resources = mongoose.model('Resources', resourcesSchema);
const VideoURL = mongoose.model('VideoURL', videoURLSchema);
export { Lecture, Resources, VideoURL };
