const express = require('express');

const app = express();
const PORT = process.env.PORT || 3333;

app.get('/', (_, res) => {
  res.send('Hello World with Node.js + Docker! 🚀');
});

app.listen(PORT, () => console.log(`Server is running at port ${PORT}`));