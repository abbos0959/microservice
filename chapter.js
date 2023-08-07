const mongoose = require("mongoose");
const chapterschema = new mongoose.Schema(
  {
    revelation_place: { type: String },
    revelation_order: {
      type: Number,
      unique: true,
      index: true,
    },
    bismillah_pre: { type: Boolean },
    name_complex: { type: String },
    name_simple: { type: String },
    name_arabic: { type: String },
    telegram_file_id: { type: String, default: "" },
    verse_count: { type: Number },
    pages: [],
    quran_order: { type: Number, unique: true, index: true },
    count_verse: {
      type: Number,
    },
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);
chapterschema.index({ name_simple: "text" });

chapterschema.virtual("translated_names", {
  ref: "translatednameschapters",
  localField: "_id",
  foreignField: "chapter_id",
});
chapterschema.virtual("audio", {
  ref: "audiochapters",
  localField: "_id",
  foreignField: "chapter_id",
});
chapterschema.virtual("chapter_info", {
  ref: "chapterinfos",
  localField: "_id",
  foreignField: "chapter_id",
});
chapterschema.virtual("verses", {
  ref: "verses",
  localField: "_id",
  foreignField: "chapter_id",
});
chapterschema.virtual("tafsir", {
  ref: "tafsirverses",
  localField: "_id",
  foreignField: "chapter_id",
});

module.exports = mongoose.model("chapters", chapterschema);
