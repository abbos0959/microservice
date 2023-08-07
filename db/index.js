const { default: mongoose } = require("mongoose");

const Database = async (req, res, next) => {
  try {
    await mongoose.connect(
      "mongodb+srv://abbosg5:1Hb5kb2s292AfqQp@cluster0.mnk831q.mongodb.net/"
    );
    console.log("mongodb ulandiii");
  } catch (error) {
    console.log("ulanmadiiiiiiii");
  }
};

module.exports = Database;
// 1Hb5kb2s292AfqQp
