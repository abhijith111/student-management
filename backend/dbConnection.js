import mongoose from "mongoose";

let conn = () => {
    mongoose.connect(
        "mongodb+srv://adminAbhijith:oqHXYcznxGACtPSC@cluster0.bpv2s.mongodb.net/school?retryWrites=true&w=majority",
        {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false,
            useCreateIndex: true,
        }
    );

    mongoose.connection
        .once('open', () => {
            console.log("Database Connection Established");
        })
        .on('err', (err) => {
            console.log("Somthing Went Wrong: ", err);
        });
};

export default conn;
