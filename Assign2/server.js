/*************************************************************************************
* WEB322 - 2241 Project
* I declare that this assignment is my own work in accordance with the Seneca Academic
* Policy. No part of this assignment has been copied manually or electronically from
* any other source (including web sites) or distributed to other students.
*
* Student Name  : Dongqin Ran
* Student ID    : dran
* Course/Section: WEB322/NAA
*
**************************************************************************************/

const path = require("path");
const express = require("express");
const expressLayouts = require('express-ejs-layouts');
const app = express();


// Make the "assets" folder public (aka Static)
app.use(express.static(path.join(__dirname, "/assets")));

// set up EJS
 app.set("view engine", "ejs");
 app.set("layout", "layouts/main");
 app.use(expressLayouts);

// Setup a home page route
app.get("/", (req, res) => {
    var mealKits = [
        {
            title: "Sautéed Ground Pork over Jasmine Rice",
            includes: "Toasted Peanuts & Quick-Pickled Cucumber Salad",
            description: "Gingery pork, crunchy cucumbers, and toasty peanuts.",
            category: "Classic Meals",
            price: 19.99,
            cookingTime: 25,
            servings: 2,
            imageUrl: "/images/meal_2",
            featuredMealKit: true
        },
        {
            title: "Teriyaki Chicken with Steamed Vegetables",
            includes: "White Rice & Sesame Ginger Sauce",
            description: "Juicy teriyaki chicken served with a side of steamed vegetables.",
            category: "Classic Meals",
            price: 24.99,
            cookingTime: 30,
            servings: 2,
            imageUrl: "/assets/teriyaki_chicken.jpg",
            featuredMealKit: true
        },
        {
            title: "Vegetarian Chili with Cornbread",
            includes: "Black Beans, Corn & Avocado Salsa",
            description: "Hearty vegetarian chili topped with avocado salsa, served with warm cornbread.",
            category: "Classic Meals",
            price: 17.99,
            cookingTime: 35,
            servings: 4,
            imageUrl: "/assets/vegetarian_chili.jpg",
            featuredMealKit: true
        },
        {
            title: "Grilled Salmon with Lemon Dill Sauce",
            includes: "Roasted Potatoes & Green Beans",
            description: "Fresh salmon fillets grilled to perfection, topped with lemon dill sauce, served with roasted potatoes and green beans.",
            category: "Classic Meals",
            price: 26.99,
            cookingTime: 25,
            servings: 2,
            imageUrl: "/assets/grilled_salmon.jpg",
            featuredMealKit: true
        },
        {
            title: "Mediterranean Grilled Lamb with Couscous",
            includes: "Tzatziki Sauce & Greek Salad",
            description: "Grilled lamb marinated in Mediterranean spices, served with couscous and tzatziki sauce.",
            category: "Mediterranean Delights",
            price: 29.99,
            cookingTime: 40,
            servings: 2,
            imageUrl: "/assets/mediterranean_lamb.jpg",
            featuredMealKit: false
        },
        {
            title: "Tex-Mex Beef Tacos with Guacamole",
            includes: "Homemade Tortillas & Salsa",
            description: "Spicy beef tacos with homemade tortillas, served with fresh guacamole and salsa.",
            category: "Mediterranean Delights",
            price: 21.99,
            cookingTime: 20,
            servings: 3,
            imageUrl: "/assets/beef_tacos.jpg",
            featuredMealKit: false
        }
    ];
    res.render("home", {
        mealkits,
        title: "Home Page"
    });
    
});

// Setup a route to return the menu page
app.get("/on-the-menu", (req, res) => {
    res.render("on-the-menu", {
        title:"on-the-menu Page"
    });
});

// Setup a route to return the signup page
app.get("/sign-up", (req, res) => {
    res.render("sign-up", {
        title: "Sign-Up Page"
    });
});

// Setup a route to return the log in page
app.get("/log-in", (req, res) => {
    res.render("log-in", {
        title: "Log-in Page"
    });
});




// This use() will not allow requests to go beyond it
// so we place it at the end of the file, after the other routes.
// This function will catch all other requests that don't match
// any other route handlers declared before it.
// This means we can use it as a sort of 'catch all' when no route match is found.
// We use this function to handle 404 requests to pages that are not found.
app.use((req, res) => {
    res.status(404).send("Page Not Found");
});

// This use() will add an error handler function to
// catch all errors.
app.use(function (err, req, res, next) {
    console.error(err.stack)
    res.status(500).send("Something broke!")
});


// *** DO NOT MODIFY THE LINES BELOW ***

// Define a port to listen to requests on.
const HTTP_PORT = process.env.PORT || 8080;

// Call this function after the http server starts listening for requests.
function onHttpStart() {
    console.log("Express http server listening on: " + HTTP_PORT);
}
  
// Listen on port 8080. The default port for http is 80, https is 443. We use 8080 here
// because sometimes port 80 is in use by other applications on the machine
app.listen(HTTP_PORT, onHttpStart);