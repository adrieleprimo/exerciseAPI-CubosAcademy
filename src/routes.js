const express = require('express');
const { allClasses, classId, allInstructors, instructorId, newClass, instructorClass } = require('./controllers/classes');
const routes = express();

routes.get('/classes', allClasses);
routes.get('/classes/:id', classId);
routes.get('/instructors', allInstructors);
routes.get('/instructors/:id', instructorId);
routes.post('/instructors/:id/classes', newClass);
routes.get('/instructors/:id/classes', instructorClass);

module.exports = { routes };