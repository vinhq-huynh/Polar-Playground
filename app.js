import express from "express";
import path, { dirname } from "path";
import { fileURLToPath } from "url";
import Firestore, { FieldValue } from "@google-cloud/firestore"

// Path of the module, platform specific
const __dirname = dirname(fileURLToPath(import.meta.url));
const app = express();

// Use "public" as the folder for static content
app.use(express.static("public"));

// The default view engine is set to EJS, subsequent calls to res.render do not need to specify .ejs extension
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// Index route
app.get("/", (req, res) => {
    res.render("index");
})

// Menu route
app.get("/menu", (req, res) => {
    res.redirect("menu/cottoncandy");
})

// Cotton candy menu route
// Initialize connection to GCP Firestore
const db = new Firestore({
    projectId: 'polar-playground',
});
app.get("/menu/cottoncandy", async (req, res) => {
    // Get all published characters from Firestore
    const allCharacters = await db.collection('characters').where("published", "==", true).get();
    const allFlavors = [
        {id: "red", name: "Cherry", tubAvailable: true},
        {id: "yellow", name: "Lemon", tubAvailable: true},
        {id: "green", name: "Apple", tubAvailable: true},
        {id: "blue", name: "Raspberry", tubAvailable: true},
        {id: "purple", name: "Grape", tubAvailable: true},
        {id: "white", name: "Vanilla", tubAvailable: true},
        {id: "pink", name: "Passionfruit", tubAvailable: true},
        {id: "dark_pink", name: "Strawberry", tubAvailable: false},
        {id: "orange", name: "Orange", tubAvailable: false},
        {id: "light_blue", name: "Blueberry", tubAvailable: false},
        {id: "peach", name: "Peach", tubAvailable: false},
        {id: "brown", name: "Mixture", tubAvailable: false},
        {id: "grey", name: "Mixture", tubAvailable: false},
    ]
    res.render("cottoncandy", { allCharacters, allFlavors, __dirname });
})

// Ice cream menu route
app.get("/menu/icecream", async (req, res) => {
    const allCharacters = await db.collection('characters').where("published", "==", true).get();
    const allMilkshakes = [
        {id: "CC", name: "Cookies & Cream", description: "Vanilla ice cream, Oreo bits, chocolate sauce"},
        {id: "PE", name: "Polar Espresso", description: "Coffee ice cream with toffee bits and cookie crisps mixed in then topped with cookie crisps and chocolate wafer"},
        {id: "CO", name: "Chocolate OD", description: "Chocolate ice cream with cocoa puffs and Oreo bits mixed in then tooped with cocoa"},
        {id: "SS", name: "Salt Shaker", description: "Salted Caramel ice cream, pretzels, Reece's pieces"},
        {id: "PB", name: "PBBJ", description: "Strawberry ice cream, bananas, butterfinger bits, strawberry sauce"}, 
        {id: "CK", name: "Cereal Killer", description: "Vanilla ice cream with frosted flakes mixed in then topped with fruity pebbles and rice krispies treats"},
        {id: "HN", name: "Hella Nutella", description: "Nutella ice cream, toffee bits, cocoa puffs, chocolate sauce"}
    ]

    res.render("icecream", { allCharacters, allMilkshakes, __dirname });
})

app.get("/hours", (req, res) => {
    res.render("hours");
})

app.get("/about", (req, res) => {
    res.render("about");
})

// Waittime route
app.get("/waittime", (req, res) => {
    const waittimeDescriptions = [
        "we are not busy at the moment.",
        "we are a little busy right now.",
        "we are quite busy right now.",
        "we are really busy at the moment.",
        "we are experiencing the highest demands right now.",
        "we are closed for today.",
        "we are closed today."
    ];
    // Get waittime from server
    
    // Build waittime object
    var waittimeObj = {
        hour: 1,
        minute: 15,
        lastUpdated: 10
    }
    res.render("waittime", { waittimeDescription : waittimeDescriptions[1], waittimeObj });
})

// This app is deployed on GCP App Engine, so it uses the specifed "PORT". Use 8080 otherwise.
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}...`);
});