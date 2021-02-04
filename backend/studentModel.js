import mongoose from "mongoose";

const studentModel = mongoose.Schema({
    student_name: { type: String },
    student_class: { type: Number },
    student_mobile: { type: Number },
    student_reg_date: { type: Date, default: new Date() },
});

//student -> collection name , studentModel -> exporting default variable.
export default mongoose.model("student", studentModel);
