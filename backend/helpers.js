import mongoose from "mongoose";
import bcrypt from "bcrypt";

import studentModel from "./studentModel.js";
import classModel from "./classModel.js";
import adminModel from "./adminModel.js";

const ObjectId = mongoose.Types.ObjectId;

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
            studentModel
                .updateOne(
                    { _id: ObjectId(studentUpdateObject.id) },
                    { $set: { student_mobile: 2 } }
                )
                .then(() => {
                    resolve({ studentUpdateStatus: true });
                });
        });
    },
    doAdminSignup: () => {
        return new Promise((resolve, reject) => {
            let adminObject = {
                admin_name: "ADMIN_abhijith",
            };
            bcrypt.hash("admin_password", 10, (err, hash) => {
                if (err) console.log(err, "cannot encrypt");
                else {
                    adminObject.admin_password = hash;
                    adminModel.create(adminObject, (err) => {
                        if (err) {
                            console.log(
                                err,
                                "error happens on admin signup from database"
                            );
                            resolve({ adminSignupStatus: false });
                        } else {
                            resolve({ adminSignupStatus: true });
                        }
                    });
                }
            });
        });
    },
    doAdminLogin: (adminLoginObject) => {
        return new Promise((resolve, reject) => {
            adminModel.findOne({ admin_name: adminLoginObject.admin_name }).then((adminAtDb)=> {
                bcrypt.compare(adminLoginObject.admin_password,adminAtDb.admin_password).then((response)=> {
                    if (response) resolve({adminLoginStatus: true})
                    else resolve({adminLoginStatus: false})
                })
            });
        });
    },
};

export default helpers;