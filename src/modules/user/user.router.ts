import * as userController from './controller/user'
import {Router} from "express"
const router = Router();

router.get('/', userController.getUserModule)
router.post('/signup', userController.addUser)
router.put('/:id', userController.updateUser)
router.delete('/:id', userController.deleteUser)






export default router