const expres = require("express");
const {
  allchapter,
  allchapterInfo,
  chapterInfo,
  chapterInfoPost,
} = require("./chapterController");

require("./db/index")();
const app = expres();

app.use(expres.json());

app.get("/api/v1/chapter", allchapter);
app.get("/api/v1/chapter_info", allchapterInfo);
app.post("/api/v1/chapter_info", chapterInfoPost);

app.listen(6000, () => {
  console.log("server ishladi");
});
