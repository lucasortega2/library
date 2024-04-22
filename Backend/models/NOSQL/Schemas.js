import mongoose from 'mongoose';

const bookSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  pages: {
    type: Number,
    required: true,
  },
  image_url: {
    type: String,
    required: true,
  },
  publication_date: {
    type: String,
    required: true,
  },
  extract: {
    type: String,
    required: true,
  },
});
export default mongoose.model('books', bookSchema);
