const chapter = require("./chapter");
const chapterInfo = require("./chapterinfo");

const allchapter = async (req, res) => {
  try {
    const data = await chapter.find().sort("quran_order");
    res.status(200).json({ data });
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
};
const allchapterInfo = async (req, res) => {
  try {
    const data = await chapterInfo.find().populate("chapter_id");
    res.status(200).json({ data });
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
};
const chapterInfoPost = async (req, res) => {
  try {
    const data = await chapterInfo.create(req.body);
    res.status(200).json({ data });
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
};

module.exports = { allchapter, allchapterInfo, chapterInfoPost };
