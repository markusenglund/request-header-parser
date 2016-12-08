var express = require("express"),
    app = express(),
    parser = require("ua-parser-js");


app.get("/", function(req, res) {
    
    console.log("ip: " + req.ip)
    var ua = parser(req.headers["user-agent"]);
    console.log("os: " + ua.os);
    var language = req.headers["accept-language"].split(",")[0];
    res.json({ipaddress: req.ip, language: language, os:ua.os.name + " " + ua.os.version});
})

app.listen(3000, function() {
    console.log("Now listening");
});