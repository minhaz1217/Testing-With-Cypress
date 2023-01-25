var xlsx = require("xlsx");
var fs = require("fs");

var workBook = xlsx.readFile("cypress/fixtures/file/user_data.xlsx");

var workSheet = workBook.Sheets["Sheet1"];

var userData = xlsx.utils.sheet_to_json(workSheet);

console.log(userData);

fs.writeFile(
  "cypress/fixtures/file/userData.json",
  JSON.stringify(userData),
  (err) => {
    if (err) {
      console.error(err);
      return;
    }
  }
);
fs.close();

// to run this file
// node "cypress\e2e\05. ConvertXLSXToJSON.js"