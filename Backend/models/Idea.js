import mongoose from 'mongoose';

const ideaSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: String,
  tags: [String],
}, { timestamps: true });

export default mongoose.model('Idea', ideaSchema);
