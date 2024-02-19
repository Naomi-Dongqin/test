const mealkitUtil = require("../modules/mealkit-util");
const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
    res.render("mealkits/list", {
    mealkits: mealkitUtil.getFeaturedMealKits(mealkitUtil.getAllmealKits()),
    title: "Mealkits list"
});
});

router.get("/category", (req, res) => {
    res.render("mealkits/list", {
        mealkits: mealkitUtil.getMealKitsByCategory(mealkitUtil.getAllmealKits()),
        title: "Grouped by Category mealkits list"
    });
});
module.exports = router;
