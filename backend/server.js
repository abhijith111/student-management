import express, { response } from "express";
import cors from "cors";
import helpers from "./helpers.js";

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());
// studentModel.create({ name: "abhi"},(err)=> {
//     console.log(err);
// })

//routing
// user routing->
app.get("/", (req, res) => {
    res.send("hi");
});
app.post("/register", (req, res) => {
    console.log(req.body);
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
    console.log(req.body,"inside update-student");
    helpers.updateStudent(req.body).then((response)=>{
        console.log(response,"after updateStudent function");
        res.json({update: 'success'})
    })
});

//admin-routing->
app.post("/admin/add-class", (req, res) => {
    console.log(req.body, "add-class api call");
    helpers.addClass(req.body).then((response) => {
        res.json(response);
        console.log(response, "response after addClass function in helpers.js");
    });
});

//listening..
app.listen(PORT, () => {
    console.log("server started at port: ", PORT);
});
