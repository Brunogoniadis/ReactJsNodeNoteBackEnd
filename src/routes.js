const express = require('express')
const routes = express.Router();


const AnnotationControler = require('./controllers/AnnotationController');

routes.post('/annotations', AnnotationControler.create);
routes.get('/annotations', AnnotationControler.read);
routes.delete('/annotations/:id', AnnotationControler.delete);

module.exports = routes;