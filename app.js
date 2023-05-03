const express = require("express");
const app = express();
const bodyParser = require("body-parser");

//
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: false }));
//

app.get("/", (req, res) => {
  res.render("form.ejs");
});

app.post("/bmi", (req, res) => {
  let w = req.body.weight;
  let h = req.body.height;
  let bmi = w / h ** 2;
  res.render("bmi.ejs", { w: w, h: h, bmi: bmi });
});
app.listen("3300", () => {
  console.log("we are listening ...");
});

// this.bmi = this.mass / this.height ** 2;
