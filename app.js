const express = require('express');
const path = require('path');

const app = express();
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'));
app.set(express.static(path.join(__dirname, 'public')));
const PORT = 3000;

app.get('/', (req, res) => {
  res.render('registration');
});

app.listen(PORT, () => {
  console.log(`server started PORT: ${PORT}`);
});
