const express = require('express');
const { allClasses, classId,  newClass, instructorClass } = require('./controllers/classes');
const { instructorId, newInstructor, allInstructors } = require('./controllers/instructors');

const routes = express();

routes.get('/classes', allClasses);
routes.get('/classes/:id', classId);
routes.get('/instructors', allInstructors);
routes.get('/instructors/:id', instructorId);
routes.post('/instructors/:id/classes', newClass);
routes.post('/instructors',newInstructor)
routes.get('/instructors/:id/classes', instructorClass);

module.exports = { routes };