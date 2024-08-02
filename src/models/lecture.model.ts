import mongoose, { Document, Schema } from 'mongoose';

// Interface for Resources
interface IResources extends Document {
  title: string;
  url: string;
}

// Interface for Video URL
interface IVideoURL extends Document {
  _480p?: string;
  _720p?: string;
  _1080?: string;
}

// Interface for Lecture
interface ILecture extends Document {
  title: string;
  description: string;
  position: number;
  resources?: IResources[];
  videoURL?: IVideoURL;
  duration: number;
  course: mongoose.Types.ObjectId;
  instructor: mongoose.Types.ObjectId;
  isPublished: boolean;
  isPreview: boolean;
  createdAt: Date;
  updatedAt: Date;
}

// Resources Schema
const resourcesSchema = new Schema<IResources>({
  title: { type: String, required: true },
  url: { type: String, required: true }
});

// Video URL Schema
const videoURLSchema = new Schema<IVideoURL>({
  _480p: { type: String },
  _720p: { type: String },
  _1080: { type: String }
});

// Lecture Schema
const lectureSchema = new Schema<ILecture>({
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
lectureSchema.pre<ILecture>('save', function(next) {
  this.updatedAt = new Date();
  next();
});

const Lecture = mongoose.model<ILecture>('Lecture', lectureSchema);
const Resources = mongoose.model<IResources>('Resources', resourcesSchema);
const VideoURL = mongoose.model<IVideoURL>('VideoURL', videoURLSchema);

export { Lecture, Resources, VideoURL };