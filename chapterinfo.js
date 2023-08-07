const mongoose = require("mongoose");
const chaptersInfoschema = new mongoose.Schema({
  chapter_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "chapters",
  },

  chapter_number: { type: Number },
  text: {
    type: String,
  },
  short_text: {
    type: String,
  },

  lang_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "langs",
  },
});

module.exports = mongoose.model("chapterinfos", chaptersInfoschema);
