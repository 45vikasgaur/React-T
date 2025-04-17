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


const data =[
{
  id: 1,
  name: 'a', 
}
,
{
  id: 2,
  name: 'b',
}
,
{
  id: 3,
  name: 'c',
}
]