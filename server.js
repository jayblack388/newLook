// *****************************************************************************
// Server.js - This file is the initial starting point for the Node/Express server.
const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const ejs = require("ejs");
const PORT = process.env.PORT || 8080;

const app = express();

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use('/static', express.static(path.join(__dirname, './app/public')));


// require("./app/routes/apiRoutes.js")(app);
require("./app/routes/html-routes.js")(app);

app.listen(PORT, () => {
  console.log("App listening on PORT " + PORT);
});
