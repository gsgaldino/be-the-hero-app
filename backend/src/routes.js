const express = require("express");
const ongController = require('./controllers/OngController')

const routes = express.Router();

//Register a new ONG Route
routes.post("/ongs", ongController.create)
//Get all ONGS
routes.get("/ongs", ongController.index)

module.exports = routes
