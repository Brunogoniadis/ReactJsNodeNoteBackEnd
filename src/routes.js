const express = require('express')
const routes = express.Router();


const AnnotationControler = require('./controllers/AnnotationController');
const ContentController = require('./controllers/ContentController');
const PriorityController = require('./controllers/PriorityController');

routes.post('/annotations', AnnotationControler.create);
routes.get('/annotations', AnnotationControler.read);
routes.delete('/annotations/:id', AnnotationControler.delete);

routes.get('/priorities', PriorityController.read);
routes.post('/priorities/:id', PriorityController.update);

routes.post('/contents/:id', ContentController.update);
module.exports = routes;