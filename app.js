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
    res.send("Our menu");
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
    const allCharacters = await db.collection('characters').where("seasonal", "==", true).get();
    res.render("icecream", { allCharacters, __dirname });
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
        hour: 0,
        minute: 0,
        updatedTime: 0
    }
    res.render("waittime", { waittimeDescriptions, waittimeObj });
})

// This app is deployed on GCP App Engine, so it uses the specifed "PORT". Use 8080 otherwise.
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}...`);
});

// const characters = [];
    
// characters.forEach(async (char) => {
//     const data = {
//         name: char,
//         flavors: "",
//         description: "",
//         published: true,
//         seasonal: false
//     };
      
//     const res = await db.collection("characters").doc(char).set(data);
// })