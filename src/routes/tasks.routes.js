import {Router} from 'express';
import tasksController from '../controllers/tasks.controller.js';
// import { authenticateToken } from '../middlewares/authenticate.middlware.js';

const router = Router();

// router.get('/', (req, res) => {
//     res.send('Welcome a Tasks');
// });

// router.post('/', (req, res) => {
//     res.send('Creando Tasks');
// });

// router.get('/', authenticateToken, tasksController.getTasks);
// router.post('/', authenticateToken, tasksController.createTasks);

router
.route('/')
.get(tasksController.getTasks)
.post(tasksController.createTasks);

router
.route('/')
.get(tasksController.getTask)
.put(tasksController.updateTask)
.delete(tasksController.deleteTask)
.patch(tasksController.taskDone)

export default router;
