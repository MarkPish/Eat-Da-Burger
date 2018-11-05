// need to import the ORM to create the functions to interact with the db
// set path to the orm.js
var orm = require('../config/orm.js');

//  call back functions similar in set-up to the orm.js file
// set up variable for burger with - select, insert and update functions all inside the variable

var burger = {
    selectAll: function (cb) {
        orm.selectAll(function (res) {
            cb(res);
        });
    },

    insertOne: function (burger, cb) {
        orm.insertOne(burger, function (res) {
            cb(res);
        });
    },

    updateOne: function (id, cb) {
        orm.updateOne([id], function (res) {
            cb(res);
        });
    }

};

// need a module exports for burger 
module.exports = burger;