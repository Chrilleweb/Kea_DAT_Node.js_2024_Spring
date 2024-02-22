const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json());

const drinks = [
  { id: 1, name: "Mojito" },
  { id: 2, name: "Isbjørn" },
  { id: 3, name: "Old Fashion" },
];

let nextId = drinks.length + 1;

app.get("/drinks", (req, res) => {
  res.send({ data: drinks });
});

app.get("/drinks/:id", (req, res) => {
  const providedDrinkId = Number(req.params.id);
  const foundDrink = drinks.find((drink) => drink.id === providedDrinkId);
  if (!foundDrink) {
    res.status(404).send({ data: "Drink not found" });
  } else {
    res.send({ data: foundDrink });
  }
});

app.post("/drinks", (req, res) => {
  const newDrink = req.body;
  newDrink.id = nextId++;
  const drinkWithIdFirst = { id: newDrink.id, ...newDrink };
  drinks.push(drinkWithIdFirst);
  res.status(201).send({ data: drinkWithIdFirst });
});

app.delete("/drinks/:id", (req, res) => {
  const providedDrinkId = Number(req.params.id);
  const index = drinks.findIndex((drink) => drink.id === providedDrinkId);
  if (index === -1) {
    res.status(404).send({ data: "Drink not found" });
  } else {
    drinks.splice(index, 1);
    res.send({ data: drinks });
  }
});

app.put("/drinks/:id", (req, res) => {
  const providedDrinkId = Number(req.params.id);
  const index = drinks.findIndex((drink) => drink.id === providedDrinkId);
  if (index === -1) {
    res.status(404).send({ data: "Drink not found" });
  } else {
    drinks[index] = req.body;
    res.send({ data: drinks });
  }
});

app.listen(8080, (error) => {
  if (error) {
    console.log("Error starting the server");
    return;
  }
  console.log("Server is running on port", 8080);
});
