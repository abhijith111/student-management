import mongoose from "mongoose";

const classModel = mongoose.Schema({
    class_division: { type: String, default: "A" },
    class_standard: { type: Number },
    class_teacher: { type: String },
});

export default mongoose.model("classes", classModel);
