const mealkitUtil = require("../modules/mealkit-util");
const express = require("express");
//Router will link the express on the other page
const router = express.Router();

//setup a home page
app.get("/", (req, res) => {
    res.render("mealkits/list", {
        mealkits: mealkitUtil.getAllmealKits(),
        title: "Home Page"
    });
})
// Setup a route to return the menu page
app.get("/on-the-menu", (req, res) => {
    res.render("general/on-the-menu", {
        title:"on-the-menu"
    });
});

// Setup a route to return the signup page
app.get("/sign-up", (req, res) => {
    res.render("general/sign-up", {
        title: "Sign-Up Page"
    });
});

// Setup a route to return the log in page
app.get("/log-in", (req, res) => {
    res.render("genral/sign-up", {
        title: "Log-in Page"
    });
});

module.exports = router;
