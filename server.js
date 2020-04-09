// Dependencies
// =============================================================
const express = require("express");
const path = require("path");
const fs = require("fs");
// Sets up the Express App
// =============================================================
const app = express();
//deployable port and local port
const PORT = process.env.PORT || 3000;
// loads all the middleware
app.use(Express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));
//JSON 
var contents = fs.readFileSync("db/db.json")
var notes = JSON.parse(contents)

// Routes ============================================================= //

//HTML get routes - notes
app.get("/notes",  (req, res) => {
    res.sendFile(path.join(__dirname, "add.html"));
});
//API Get Route notes
app.get("/api/notes", (req, res) => {
    fs.writeFile('db/db.json', "utf-8", (err, data) => {
        if (err) throw err;
    })
        return res.json(JSON.parse(data));

//API POST Route
// Create New Characters - takes in JSON input
app.post("/api/notes", function (req, res) {
    // req.body hosts is equal to the JSON post sent from the user
    // This works because of our body parsing middleware
    var newNotes = req.body;
    fs.readFile("db/db.json", function (err, data) {
        if (err) throw err;
        var notes = JSON.parse(data);
        req.body.id = notes.length + 1;
        notes.push(newNotes);

    fs.writeFile('db/db.json', JSON.stringify(notes), function (err) {
        if (err) throw err;
        return res.json(newCharacter);
    })
    
});



//API Delete Route
// ---------------------------------------------------------------------------
// I added this below code so you could clear out the table while working with the functionality.
// Don"t worry about it!

app.delete("/api/notes/:id", function (req, res) {
    // Empty out the arrays of data
    tableData.length = 0;
    waitListData.length = 0;

    res.json({ ok: true });
});




//HTML routes - get all *

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});
