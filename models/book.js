const mongoose = require(`mongoose`);
const Schema = mongoose.Schema;

const bookSchema = new Schema({
  title: { type: String, required: true },
  author: { type: String, required: true },
  synopsis: { type: String, required: true },
  imageurl: { type: String, required: true },
  bookurl: { type: String, required: true },
  date: { type: Date, default: Date.now },
});

const Book = mongoose.model("Book", bookSchema);

module.exports = Book;
