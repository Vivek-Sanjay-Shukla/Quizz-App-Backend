// this will have all the api routes of this project
import { Router } from "express";
const router = Router();

// import controllers
import * as controller  from '../controller/controller.js'


// questions routes
// router.get('/questions',controller.getQuestions)
// router.post('/questions',controller.insertQuestions);

router.route('/questions')
       .get(controller.getQuestions) // get request
       .post(controller.insertQuestions) // post request
       .delete(controller.deleteQuestions)  // delete request

       
router.route('/result')
.get(controller.getResults) // get request
.post(controller.insertResults) // post request
.delete(controller.deleteResults)  // delete request




export default router;



