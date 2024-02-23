const express = require("express");
const app = express();

app.use(express.json());


app.get("/", (req, res) => {
    res.sendFile(__dirname + "/public/homepage/homepage.html");
});



app.get("/publicsquare", (req, res) => {
    res.sendFile(__dirname + "/public/publicSquare/publicSquare.html");
});

// task take a name from the query string and gret person if you know them
// task otherwise say hello stranger

const knownPeople = ["Christian", "ALice"]

app.get("/greeting", (req, res) => {
    if (req.query.name === knownPeople) {
        res.send({data: `Hello, ${knownPeople}`});
    }
    else {
        res.send({data: `Hello, stranger`});
    }
})

app.get("/knownPeople", (req, res) => {
    res.send({data: knownPeople.length});
})

const PORT = 8080;
app.listen(PORT, () => console.log("Server is running on port", PORT));
