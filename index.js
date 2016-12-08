var express = require("express"),
    app = express(),
    parser = require("ua-parser-js"),
    port = process.env.PORT || 3000


app.get("/", function(req, res) {

    var ua = parser(req.headers["user-agent"]);
    var language = req.headers["accept-language"].split(",")[0];
    var ip = req.headers["x-forwarded-for"];
    res.json({
        ip: ip, 
        language: language, 
        OS: ua.os.name + " " + ua.os.version});
});

app.listen(port, function() {
    console.log("Now listening");
});