const request = require("request");
const cheerio = require("cheerio");
const mongoose = require("fs");

const URL = "http://localhost:8080/";

request(URL, function (err, res, body) {
  if (err) {
    console.log(err);
  } else {
    let $ = cheerio.load(body); //loading of complete HTML body

    $("container > #buttonsSearch>col-lg-3").each(function (index) {
      const link = $(this).find("").attr("href");
      const name = $(this).find("container > #buttonsSearch>col-lg-3").text();
      console.log(success);
      console.log(link);
      console.log(name);
    });
  }
});
