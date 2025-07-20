const express = require('express');
const app = express();
const port = 3000;

// app.get('/', (req, res) => {
//   res.send('Hello, World!');
// });

app.get('/',(req, res) => {
   //res.send("hello world");
  // res.sendStatus(200).send("Hello, World!");
  res.send('<h1>this is a website header</h1>');
});

app.get('/api', (req, res) => {
    res.json({ message: 'Hello from the API!' });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
