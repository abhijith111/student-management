import Promise from "promise";
import mongoose from "mongoose";

import studentModel from "./studentModel.js";
import classModel from "./classModel.js";
import conn from "./dbConnection.js";

const ObjectId = mongoose.Types.ObjectId;

conn();

let helpers = {
    addStudent: (studentObject) => {
        return new Promise((resolve, reject) => {
            studentModel.create(studentObject, (err) => {
                if (err) {
                    resolve({ studentRegistrationStatus: false });
                    // console.log("error happend in create student model(*&)*(&^(*#%(&*#^)(*&#)(^($&",err,"err ended(*&$*(&^(*#&^$(*#&$^)(*&$)(#^$&");
                } else {
                    // console.log("student registration success");
                    resolve({ studentRegistrationStatus: true });
                }
            });
        });
    },
    addClass: (classObject) => {
        return new Promise((resolve, reject) => {
            classModel.create(classObject, (err) => {
                if (err) {
                    resolve({ newClassAddingStatus: false });
                } else {
                    resolve({ newClassAddingStatus: true });
                }
            });
        });
    },
    findStudent: (studentSearchObject) => {
        return new Promise((resolve, reject) => {
            studentModel
                .findOne({ _id: ObjectId(studentSearchObject.id) })
                .then((response) => {
                    resolve(response);
                });
        });
    },
    updateStudent: (studentUpdateObject) => {
        return new Promise((resolve, reject) => {
            console.log(studentUpdateObject.id, "inside helpers/updateStudent");
            studentModel.updateOne(
                { _id: ObjectId(studentUpdateObject.id) },
                { $set: { student_mobile: 6546564 } }
            );
        }).then((response) => {
            resolve(response);
        });
    },
};

export default helpers;
