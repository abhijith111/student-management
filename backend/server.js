import express, { response } from "express";
import cors from "cors";
import helpers from "./helpers.js";
import mongoConnect from './dbConnection.js';

const app = express();
const PORT = process.env.PORT || 5000;

mongoConnect();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());


//routing
// user routing->
app.get("/", (req, res) => {
    res.send("hi");
});
app.post("/register", (req, res) => {
    helpers.addStudent(req.body).then((response) => {
        res.json(response);
    });
});
app.get("/search-student", (req, res) => {
    helpers.findStudent(req.body).then((response) => {
        res.json(response);
    });
});
app.post("/update-student", (req, res) => {
    helpers.updateStudent(req.body).then((response) => {
        res.json(response);
    });
});

//admin-routing->
// helpers.doAdminSignup() -> created for admin signup, no other interfaces for adding admin, may be say as a super admin, create admin panel in future

app.get("/admin-login", (req, res) => {
    helpers.doAdminLogin(req.body).then((response) => {
        res.json(response);
    });
});
app.post("/admin/add-class", (req, res) => {
    helpers.addClass(req.body).then((response) => {
        res.json(response);
    });
});

//listening..
app.listen(PORT, () => {
    console.log("server started at port: ", PORT);
});
