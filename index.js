const express = require("express");

const app = express();

app.route("/", (req, res) => {
    return res.json({ "hey from docker": "ds" });
})

app.listen(3000, () => {
    console.log("app is running on port 3000")
})