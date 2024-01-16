import fs from "fs"
import express from "express";
import path, { dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const app = express();
const port = 9000;

app.use(express.static('public'))

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/public/index.html");
})

app.get("/menu", (req, res) => {
    // Get all characters names
    fs.readdir(path.join(__dirname, "/public/assets/images/characters"), (err, files) => {
        if (err) {
            console.log(err);
        } else {
            res.render(path.join(__dirname, "/public/menu.ejs"), { all_characters : files, __dirname : __dirname });
        }
    })
})

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
})
