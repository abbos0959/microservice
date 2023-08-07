let data = require("./islomdata.json");
const axios = require("axios");

const fetchdata = async () => {
  let a = await axios.get("http://localhost:6000/api/v1/chapter");
  let quranApi = await axios.get(
    "http://iqro-quran.uz/backend/api/v3/chapter/by_quran"
  );
  let da = data.map((val) => val);
  let chapterid = a.data.data.map((val) => val._id);
  let chapteridQuran = quranApi.data.data.map((val) => val._id);
  //   console.log(chapterid[114],chapteridQuran[114]);

  lang_id = "64748ff9a377251cad5bf407";

  const headers = {
    "Content-Type": "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0NzQ4YjNmYWY1ZTc1MDE5NGNhNGQ5MSIsImlhdCI6MTY5MTM4MDM4MCwiZXhwIjoxNzE3MzAwMzgwfQ.reomULszj2H0jv5p_A2KI9byAzztHr4etQDeYOjO6Qo",
  };

  for (let i = 0; i < 114; i++) {
    await axios.post(
      "http://iqro-quran.uz/backend/api/v1/chapter/info",

      {
        chapter_id: chapteridQuran[i],
        chapter_number: i + 1,
        text: da[i][i + 1].more_text,
        short_text: da[i][i + 1].short_text,
        lang_id: lang_id,
      },
      {
        headers: headers,
      }
    );
  }
};

fetchdata();
