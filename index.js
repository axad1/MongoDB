const mongoose = require("mongoose");
const URL = "mongodb://localhost:27017/users";

mongoose.connect(URL).then(async (db) => {
  const num = db.connection.collection("num");
  // console.log("mo = ", mo)
  const data = await num.find().toArray();
  console.log("data= ", JSON.stringify(data, undefined, 2));
  db.disconnect();
});

mongoose.connection.on("disconnected", () => {
  console.log("disconnected");
});
mongoose.connection.on("connected", () => {
  console.log("connected");
});

// console.log(mongoose.Connection())
