import { AppController } from '../controllers/AppController.js'
import { StudentsController } from '../controllers/StudentsController.js'
const express = require('express')
const router = express.Router()

router.get("/", (req, res) => {
    AppController.getHomepage(req, res);
});

router.get("/students", (req, res) => {
    console.log("Inside routes.js get /students route before controller", new Date());
    StudentsController.getAllStudents(req, res);
});

router.get("/students/:major", (req, res) => {
    StudentsController.getAllStudentsByMajor(req, res);
});

module.exports =  router;
