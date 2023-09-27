const express = require('express');
const { allClasses, classId, allInstructors, instructorId, newClass } = require('./controllers/classes');
const routes = express();

routes.get('/classes', allClasses);
routes.get('/classes/:id', classId);
routes.get('/instructors', allInstructors);
routes.get('/instructors/:id', instructorId);
routes.post('/instructors/:id/classes', newClass);
module.exports = { routes };