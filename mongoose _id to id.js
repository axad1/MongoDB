// output 'id' instead of '_id'

const mongoose = require("mongoose");

const user = {
  name: {
    type: "string",
    required: true,
  },
  // password: { type: String, private: true },
};

const userSchema = new mongoose.Schema(user);

// --> 1st methods
userSchema.set("toJSON", {
  virtuals: true,
})

// ----------------

// --> 2nd method to use a pkg but not supported with commonJS module
// const normalize = require("normalize-mongoose");
import normalize from "normalize-mongoose"
userSchema.plugin(normalize);

// ----------------

// --> 3rd method to override method
userSchema.method('toJSON', function () {
  const { __v, _id, ...object } = this.toObject();
  object.id = _id;
  return object;
});

// ----------------

// --> 4th
userSchema.set('toJSON', {
  virtuals: true,
  versionKey: false,
  transform: (doc, ret) => {
    delete ret._id;
  }
});

// ----------------

// --> 5th method to use Globally
mongoose.set('toJSON', {
  virtuals: true,
  versionKey: false,
  transform: (doc, ret) => {
    delete converted._id;
  }
});


const User = mongoose.model("user", userSchema);

module.exports = User;
