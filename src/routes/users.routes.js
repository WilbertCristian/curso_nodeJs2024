import {Router} from 'express';
import usersController from '../controllers/users.controller.js';
import { authenticateToken } from '../middlewares/authenticate.middlware.js';

const router = Router();

// router.get('/', (req, res) => {
//     res.send('Welcome a Users');
// });

// router.post('/', (req, res) => {
//     res.send('Creando Users');
// });

router.get('/', usersController.getUsers);
router.post('/', usersController.createUsers);

// router
// .route('/')
// .get(usersController.getUsers)
// .post(usersController.createUsers);
// router.route('/:id').get(usersController.getUser).put(usersController.updateUser).delete(usersController.deleteUser).path(usersController.activeInactive);
router.get('/:id', authenticateToken, usersController.getUser);
router.put('/:id', authenticateToken, usersController.updateUser);
router.delete('/:id', authenticateToken, usersController.deleteUser);
router.patch('/:id', authenticateToken, usersController.activeInactive);

router.get('/:id/tasks', authenticateToken, usersController.getTasks);

export default router;
