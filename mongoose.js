const mongoose = require("mongoose")
const validator = require("validator")

mongoose.set('strictQuery', false)
mongoose.connect("mongodb+srv://asad:zarfisha@cluster0.iawfvfl.mongodb.net/?retryWrites=true&w=majority").then(res=> console.log("connection successfull ")).catch(err=> console.log("problem occors "))

// schema
userSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true,
        unique: true,
        lowercase: true,
    }
})


userSchema.methods.speak = function speak(){
    console.log("User name is", this.name)
}

// model
User = mongoose.model("Users", userSchema )

// data
user = new User({
    name: "Asad"
})

// save
user.save()
.then(res=> console.log(res) || user.speak() || mongoose.connection.close())
.catch(err=> console.log(err))
