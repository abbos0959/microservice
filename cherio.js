const cheerio = require("cheerio");
const axios = require("axios");
const fs = require("fs");

let islomuzData = [];
const cheriodata = async (url) => {
  for (let i = 1; i < 115; i++) {
    const response = await axios.get(`https://islom.uz/mano_tarjima/${i}`);
    const $ = cheerio.load(response.data);
    const quran = $(".row");

    quran.each(function () {
      const title = $(this).find(".text_islom p").text();
      const short = $(this).find(".text_islom p em").text();
      const heading = $(this).find("h2").text();
      if (title && short) {
        islomuzData.push({
          [i]: { short_text: short, more_text: title },
        });
      }
    });
    const uniqueData = [];

    islomuzData.forEach((item) => {
      const key = Object.keys(item)[0];
      if (!uniqueData.some((obj) => Object.keys(obj)[0] === key)) {
        uniqueData.push(item);
      }
    });

    let filePath = "islomdata.json";
    fs.writeFileSync(filePath, JSON.stringify(uniqueData), (err) => {
      if (err) throw err;
      console.log("Ma'lumotlar saqlandi.");
    });
  }
};

cheriodata();
