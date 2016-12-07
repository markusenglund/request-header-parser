var express = require("express"),
    app = express();


app.get("/", function(req, res) {
    res.json({message: "Hello World!"});
    console.log("Hello World!");
})

app.listen(3000, function() {
    console.log("Now listening");
});