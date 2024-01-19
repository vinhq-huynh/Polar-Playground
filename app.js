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

app.get("/", (req, res) => {
    res.render("index");
})

// Initialize connection to GCP Firestore
const db = new Firestore({
    projectId: 'polar-playground',
});
app.get("/menu", async (req, res) => {
    // Get all published characters from Firestore
    const charactersCollection = await db.collection('characters').where("published", "==", true).get();
    res.render("menu", { allCharacters : charactersCollection, __dirname : __dirname });
})

app.get("/hours", (req, res) => {
    res.render("hours");
})

app.get("/about", (req, res) => {
    res.render("about");
})

const waittimeDescriptions = [
    "we are not busy at the moment.",
    "we are a little busy right now.",
    "we are quite busy right now.",
    "we are really busy at the moment.",
    "we are experiencing the highest demands right now.",
    "we are closed for today.",
    "we are closed today."
]
app.get("/waittime", (req, res) => {
    // Get waittime from server
    
    // Build waittime object
    var waittimeObj = {
        hour: 0,
        minute: 0,
        updatedTime: 0
    }
    res.render("waittime", { waittimeDescriptions : waittimeDescriptions, waittimeObj : waittimeObj });
})

// This app is deployed on GCP App Engine, so it uses the specifed "PORT". Use 8080 otherwise.
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}...`);
});