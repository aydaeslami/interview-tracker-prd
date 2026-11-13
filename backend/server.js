const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());


app.post('/login', (req, res) => {

  const { name } = req.body;

  const message = `Welcome ${name}!`;

  res.json({
    message: message
  });

});

app.listen(4000, () => {
  console.log('Backend running on port 4000');
});