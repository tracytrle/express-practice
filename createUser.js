const { faker } = require("@faker-js/faker");
const fs = require("fs");
// console.log(faker.animal.bear(), "receive a bear");
const createUser = (numberOfUsres, overwrite) => {
  if (!numberOfUsres) {
    console.log("please input number");
    return;
  }
  numberOfUsres = parseInt(numberOfUsres);
  console.log("creating users");
  // read current data;
  // turn JSON to JS object
  let data = JSON.parse(fs.readFileSync("db.json"));
  if (overwrite) {
    data.users = [];
  }

  for (let i = 0; i < numberOfUsres; i++) {
    const user = {
      name: faker.person.firstName(),
      email: faker.internet.email(),
      avatar: faker.image.url(),
    };
    console.log("Created", user.name, user.email, user.avatar);
    console.log("===========");
    data.users.push(user);
  }
  fs.writeFileSync("db.json", JSON.stringify(data));
  console.log(`Create ${numberOfUsres} success`);
};
const numberInput = process.argv.slice(2)[0];
const overwriteInput = process.argv.slice(2)[1];
// console.log(input);
createUser(numberInput, overwriteInput);
