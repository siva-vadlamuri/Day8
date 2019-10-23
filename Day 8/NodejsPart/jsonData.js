var fs = require("fs");
var emp = require("./MyModule").employee;
var repository = require("./MyModule").repository;
var app = require("express")();
var empDB = new repository();
app.use(function(req,res,next){
    res.header("Access-Control-")

})

}

