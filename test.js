const mongoose = require("mongoose")
mongoose.set("strictQuery", false)

mongoose.connect("mongodb://shayanSolutions:123shayan456@cluster0-shard-00-00.vqr9o.mongodb.net:27017,cluster0-shard-00-01.vqr9o.mongodb.net:27017,cluster0-shard-00-02.vqr9o.mongodb.net:27017/test?replicaSet=atlas-sa4kvn-shard-0&ssl=true&authSource=admin")
.then(res=> console.log("connection successfull"))
.catch(err=> console.log("connection error"))

const attendanceSchema = mongoose.Schema({
    employee_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'employees',
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    date: {
        type: Date,
        required: true,
    },
    clock_In: {
        type: String,
    },
    clock_Out: {
        type: String,
    },
    late: {
        type: String,
    },
    absent: {
        type: String,
    },
    week: {
        type: String,
    },
    sum_over_time: {
        type: String,
    },
    machine_no: {
        type: Number,
    },
    status: {
        type: String,
    },
    exempt: {
        type: Boolean,
    },
    reason: {
        type: String,
    },
})

Attendance = mongoose.model("attendance", attendanceSchema)

Attendance.find().limit(1)
.then(res=> console.log(res) || mongoose.connection.close())
.catch("some error")

