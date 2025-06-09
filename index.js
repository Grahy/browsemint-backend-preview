const express = require('express');
const app = express();
const PORT = process.env.PORT || 4000;

app.get('/', (req, res) => {
  res.send('BrowseMint API is running! 👋');
});

app.listen(PORT, () => {
  console.log(`Preview backend live on port ${PORT}`);
});
