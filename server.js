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

// Basic route that sends the user first to the AJAX Page
app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "/public/index.html"));
  });
//HTML get routes - notes
app.get("/notes", function(req, res) {
    res.sendFile(path.join(__dirname, "add.html"));
  });

app.post("/api/notes", (req,res) => {

    const remote = req.body;
    //add id property to object
    newNote.id = `//create Id//// `
    
}) 





//API Get route
app.listen(PORT, () => {
    console.log(`Listening on port: ${PORT}`)

})

//API POST Route
// Create New Characters - takes in JSON input
app.post("/api/characters", function(req, res) {
    // req.body hosts is equal to the JSON post sent from the user
    // This works because of our body parsing middleware
    var newCharacter = req.body;
  
    // Using a RegEx Pattern to remove spaces from newCharacter
    // You can read more about RegEx Patterns later https://www.regexbuddy.com/regex.html
    newCharacter.routeName = newCharacter.name.replace(/\s+/g, "").toLowerCase();
  
    console.log(newCharacter);
  
    characters.push(newCharacter);
  
    res.json(newCharacter);
  });



//API Delete Route




//HTML routes - get all *