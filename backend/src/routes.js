const express = require("express");
const ongController = require('./controllers/OngController')
const incidentController = require('./controllers/incidentController')
const profileController = require('./controllers/profileController')
const sessionController = require('./controllers/sessionController')

const routes = express.Router();

routes.post("/session", sessionController.create)

routes.post("/ongs", ongController.create)
routes.get("/ongs", ongController.index)

routes.get("/profile", profileController.index)

routes.post("/incidents", incidentController.create)
routes.get("/incidents", incidentController.index)
routes.delete("/incidents/:id", incidentController.delete)

module.exports = routes
