// create routes here
//  express, router details in this file
var express = require('express');

// configure router
var router = express.Router();

// Set var for burgers and set path
var burger = require("../models/burgers.js");

//.get...check details from activities...cats
router.get("/", function (req, res) {
    burger.selectAll(function (data) {
        var hbsObject = {
            burgers: data
        };
        console.log(hbsObject);
        res.render('index', hbsObject);
    });
});

// post?

// put?...check past activities and class notes from 11-3
