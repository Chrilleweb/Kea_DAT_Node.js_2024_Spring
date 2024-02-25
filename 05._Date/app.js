const express = require("express");

const app = express();

// UTC
console.log(new Date());

// Unix Epoch Time (Seconds since 1970 Jan. 1st)
console.log(Date.now());

// Local time (in my case right now and here CEST GMT+0100)
console.log(Date());

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/html/index.html");
});

app.get("/timeInLasVegas", (req, res) => {
  const lasVegasTime = new Date().toLocaleString("en-US", {
    timeZone: "America/Los_Angeles",
  });
  res.send({ data: lasVegasTime });
});

app.get("/timeinTokyo", (req, res) => {
  const tokyoTime = new Date().toLocaleString("en-US", {
    timeZone: "Asia/Tokyo",
  });
  res.send({ data: tokyoTime });
});

app.get("/countDownToNewYear", (req, res) => {
  const newYear = new Date("2025-01-01T00:00:00");
  const now = new Date();
  const timeUntilNewYear = newYear - now;

  const days = Math.floor(timeUntilNewYear / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (timeUntilNewYear % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor(
    (timeUntilNewYear % (1000 * 60 * 60)) / (1000 * 60)
  );
  const seconds = Math.floor((timeUntilNewYear % (1000 * 60)) / 1000);

  res.send({
    data: {
      days,
      hours,
      minutes,
      seconds,
    },
  });
});

app.get("/date", (req, res) => {
  res.send({ data: Date() });
});

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

app.get("/month/version1", (req, res) => {
  const monthIndex = new Date().getMonth();

  res.send({ data: months[monthIndex] });
});

app.get("/month/version2", (req, res) => {
  const monthName = new Date().toLocaleDateString("en-us", { month: "long" });
  res.send({ data: monthName });
});

app.get("/month/version3", (req, res) => {
  const monthName = Date().split(" ")[1];
  res.send({ data: monthName });
});

const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

app.get("/day", (req, res) => {
  const dayName = days[new Date().getDay()];
  res.send({ data: dayName });
});

const PORT = 8080;
app.listen(PORT, () => console.log("Server is running on port", PORT));
