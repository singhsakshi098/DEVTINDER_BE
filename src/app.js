const express = require('express');

const app = express();

//this will only handle GET call to /user
app.get("/user", (req, res) => {
    res.send({firstName: "Sakshi", lastname:"singh"});
});

app.post("/user", (req, res) => {
    //saving data to database
    res.send("data sucessfully saved")
});

app.delete("/user", (req, res) => {
    //saving data to database
    res.send("deleted data sucessfully")
});


// this will match all the http method api calls to /test
app.use("/hello/2", (req, res) => {
    res.send("aabra ka dabra");
});

app.use("/hyee", (req, res) => {
    res.send("aabra ka dabra and hye");
});

app.use("/hello", (req, res) => {
    res.send("Hello from the server!");
});

// app.use("/", (req, res) => {
//     res.send("Hello sakshi");
// });

app.listen(3000 , () => {
    console.log("server is running on 3000");
});