const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

let registrations = [];

app.get("/", (req, res) => {
    res.send("Event Registration Service Running");
});

app.post("/register", (req, res) => {

    const user = {
        id: registrations.length + 1,
        name: req.body.name,
        email: req.body.email,
        event: req.body.event
    };

    registrations.push(user);

    res.json({
        message: "Registration Successful",
        user: user
    });
});

app.get("/users", (req, res) => {
    res.json(registrations);
});

app.listen(5000, () => {
    console.log("Server running on port 5000");
});