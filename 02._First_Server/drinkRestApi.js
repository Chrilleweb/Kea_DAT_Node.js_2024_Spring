const express = require("express");
const app = express();
const PORT = 8080;

let drinks = [
  { id: 1, name: "Coffee", type: "Hot" },
  { id: 2, name: "Iced Tea", type: "Cold" },
];

app.get("/", (req, res) => {
  res.send({ data: "Welcome to drinks Rest API" });
});

app.get("/drinks", (req, res) => {
  res.send(drinks);
});

app.get("/drinks/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const drink = drinks.find((d) => d.id === id);

  if (!drink) {
    res.status(404).json({ error: "Drink not found" });
  } else {
    res.send(drink);
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
