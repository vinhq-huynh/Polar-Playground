import fs from "fs"
import express from "express";
import path, { dirname } from "path";
import { fileURLToPath } from "url";

// Main server
const __dirname = dirname(fileURLToPath(import.meta.url));
const app = express();

app.use(express.static('public'));

app.set("view engine", "ejs");
app.set('views', __dirname + "/views");

app.get("/", (req, res) => {
    res.render("index");
})

app.get("/menu", (req, res) => {
    // Get all characters names
    fs.readdir(path.join(__dirname, "public", "assets", "images", "characters"), (err, files) => {
        if (err) {
            console.log(err);
        } else {
            res.render("menu", { all_characters : files, __dirname : __dirname });
        }
    })
})

app.get("/hours", (req, res) => {
    res.render("hours");
})

app.get("/about", (req, res) => {
    res.render("about");
})

const waittime_phrases = [
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
    var waittime = {
        hour: 0,
        minute: 0,
        updatedTime: 0
    }
    res.render("waittime", { phrases : waittime_phrases, waittime : waittime });
})

app.listen();

console.log("Server listening");