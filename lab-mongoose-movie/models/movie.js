const mongoose = require("mongoose");
const Schema   = mongoose.Schema;

const movieSchema = new Schema({
  title : String,
  genre: String,
  plot: String
});

const Celebrity = mongoose.model("Movie", movieSchema);

module.exports = Movie;