const mongoose = require("mongoose");
mongoose.set("strictQuery", false);

async function connectMongo() {
  const res = await mongoose.connect(
    "mongodb+srv://asad:123Shayan456@cluster0.ge0ziee.mongodb.net/test"
  );
  console.log("connection", res.connection.readyState);
//   console.log("connection error", err);
}
connectMongo()

//         type: mongoose.Schema.Types.ObjectId,
// const attendanceSchema = mongoose.Schema({
//     employee_id: {
//         ref: 'employees',
//         required: true,
//     },
//     name: {
//         type: String,
//         required: true,
//     },
//     date: {
//         type: Date,
//         required: true,
//     },
//     clock_In: {
//         type: String,
//     },
//     clock_Out: {
//         type: String,
//     },
//     late: {
//         type: String,
//     },
//     absent: {
//         type: String,
//     },
//     week: {
//         type: String,
//     },
//     sum_over_time: {
//         type: String,
//     },
//     machine_no: {
//         type: Number,
//     },
//     status: {
//         type: String,
//     },
//     exempt: {
//         type: Boolean,
//     },
//     reason: {
//         type: String,
//     },
// })

// Attendance = mongoose.model("attendance", attendanceSchema)

// Attendance.find().limit(1)
// .then(res=> console.log(res) || mongoose.connection.close())
// .catch("some error")
