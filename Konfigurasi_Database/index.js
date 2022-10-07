const { response } = require("express");
const express = require("express");
const app = express();
const PORT = 3000;

app.get("/", (request, response) => {
  response.send("Konfigurasi Database");
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
