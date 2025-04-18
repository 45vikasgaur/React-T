const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!');
})

app.get('/abc', (req, res) => {
  const a = req.query.a;
  const b = req.query.b;
  console.log(a);
  const sum = parseInt(a) + parseInt(b);
  res.send('Path ABC! ' + sum);
})

app.get('/getData', (req, res) => {
  res.json ({
    success: true,
    Massage: 'Data fetched successfully',
    myData: data,
  });
});

app.post('/abcPost', (req, res) => {
  const a = req.query.a;
  const b = req.query.b;
  console.log(a);
  const sum = parseInt(a) + parseInt(b);
  res.send('Method Podt : ' + sum);
})
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})


const data = [
  { email: "vikas@gmail.com", password: "vikas@123" },
  { email: "ragul@gmail.com", password: "ragul@123" },
  { email: "rohit@gmail.com", password: "rohit@123" },
];