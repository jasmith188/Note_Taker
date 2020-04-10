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
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));



// Routes ============================================================= //

//HTML get routes - notes
app.get("/notes", (req, res) => {
    res.sendFile(path.join(__dirname, "public/notes.html"));
});
//API Get Route notes
app.get("/api/notes", function (req, res) {

    res.sendFile(path.join(__dirname, "public/notes.html"))

});


//API POST Route
// Create New Characters - takes in JSON input
app.post("/api/notes", function (req, res) {
    // req.body hosts is equal to the JSON post sent from the user
    // This works because of our body parsing middleware
    var newNote = req.body;
    fs.readFile("db/db.json", function (err, data) {
        if (err) throw err;
        var notes = JSON.parse(data);
        req.body.id = notes.length + 1;
        notes.push(newNote);

        fs.writeFile('db/db.json', JSON.stringify(notes), function (err) {
            if (err) throw err;
            return res.json(newNote);
        })

    });

})

//API Delete Route
// ---------------------------------------------------------------------------


app.delete("/api/notes/:id", function (req, res) {
    // Empty out the arrays of data
    notes = notes.filter(note => note.id != req.params.id)
    fs.writeFile('db/db.json', JSON.stringify(notes), function (err) {
        if (err) throw err;
        return res.json(newNote);
    })

    res.json({ ok: true });
});
//HTML routes - get all * will return to index.html
app.get("*", function (req, res) {
    res.sendFile(path.join(__dirname, "public/index.html"));
});

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});
