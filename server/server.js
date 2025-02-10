const express = require("express");
const app = express();

app.get("/api", (req, res) => {
    res.json(
        {
            "users": ["1", "2", "3", "4"]
        }
    );
});

app.listen(1234, () => {
    console.log("server listening on port 1234");
});