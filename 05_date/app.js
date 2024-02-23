const express = require('express');
const app = express();
const port = 8080;

app.use(express.json());

// UTC time
console.log(new Date());

// Unix Epoch time (Secounds since 1970 Jan 1st)
console.log(Date.now());

// local time
console.log(Date());

// assignment create a route /date that returns the current date

app.get('/date', (req, res) => {
    const date = Date();
    res.send({ data: date})
})

// assignment create a rpute with the endpoint /month
// assignment that returns the current month in text format

app.get('/month', (req, res) => {
   res.send({ data: new Date().toLocaleString('default', { month: 'long' })})
})

// assignment get today on /day i will solve it with version1's technique

app.get('/day', (req, res) => {
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    res.send({ data: days[new Date().getDay()] })
})


app.get('/', (req, res) => {
  res.send('Hello, World!');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
