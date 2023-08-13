const fs = require("fs");
const csv = require("csvtojson");

const createProduct = async () => {
  let newData = await csv().fromFile("target.csv");

  newData = new Set(newData.map((e) => e.Product));
  newData = Array.from(newData);

  newData = newData
    .map((e) => {
      return { name: e };
    })
    .filter((e) => e.name);

  let data = JSON.parse(fs.readFileSync("db.json"));

  data.products = newData;
  fs.writeFileSync("db.json", JSON.stringify(data));
  console.log("done");
  console.log(newData);
};
createProduct();
