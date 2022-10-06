const express = require("express");
const app = express();
const PORT = 3000;

app.get("/", (request, respond) => {
  respond.send("Hello World!");
});

app.listen(PORT, () => {
  console.log(`Server running on port http://localhost:${PORT}`);
});
