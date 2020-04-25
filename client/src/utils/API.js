import axios from "axios";

const BASEURL = "https://www.googleapis.com/books/v1/volumes?q=";

// Export an object with a "search" method that searches the Giphy API for the passed query
export default {
  search: function (query) {
    return axios.get(BASEURL + query);
  },

  // Saves a book to the database
  saveBook: function (bookData) {
    return axios.post("/api/search", bookData);
  },

  // Gets all books that matches the search
  getBooks: function (query) {
    return axios.get(`/api/search/${query || ""}`);
  },

  // Deletes the book with the given id
  deleteBook: function (id) {
    return axios.delete("/api/search/" + id);
  },
};
