
const mealkits = [
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


module.exports.getAllmealKits = function () {
    return mealkits;
}
//  used on the home page to display the featured meal kits
module.exports.getFeaturedMealKits = function (mealkits) {
    let filtered = [];
    for (let i = 0; i < mealkits.length; i++) {
        if (mealkits[i].featuredMealKit) {
            filtered.push(mealkits[i]);
        }
    }
    return filtered;
};

// used on the on-the-menu page to diaplay meal kits grouped into categories
module.exports.getMealKitsByCategory= function (mealkits) {
    let groupedByCategory = {};
    for (let i = 0; i < mealkits.length;i++) {
        let meal = mealkits[i];
        if (!groupedByCategory[meal.category]) {
            groupedByCategory[meal.category] = [];
        }
        groupedByCategory[meal.category].push(meal);
    }
    const result = [];
    for (const category in groupedByCategory) {
        if (Object.hasOwn(groupedByCategory, category)) {
            const categoryObject = {
                categoryName: category,
                mealKits: groupedByCategory[category]
            };
            result.push(categoryObject);
        }
    }
    return result;
}