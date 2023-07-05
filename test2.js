const { connect, connection, model, models, Schema } = require("mongoose");

async function start() {
  try {
    await connect(
      "mongodb+srv://asad:123Shayan456@cluster0.ge0ziee.mongodb.net/test"
    );
    console.log("Connection successfull");
  } catch (e) {
    console.error("error", e.message);
  }

  const userSchema = new Schema({
    name: String,
    password: String,
  });

  console.log("models.user", models);

  const User = models.people || model("user", userSchema);

  const res = await User.find({email: {$exists: false}})
  console.log(res)

  await connection.close();
}

start();
