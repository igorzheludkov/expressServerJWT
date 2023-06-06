import Router from 'express'
const router = new Router()
import controller from './authController.js'
import { query, body } from 'express-validator'
import { authMiddleware } from './middleware/authMiddleware.js'
import { roleMiddleware } from './middleware/roleMiddleware.js'

router.post(
  '/registration',
  [
    body('username', 'User name cannot be empty').notEmpty(),
    body('password', 'Password must be more than 4 and less than 10 characters').isLength({
      min: 4,
      max: 10
    })
  ],
  controller.registration
)
router.post('/login', controller.login)
router.get('/users', roleMiddleware(['ADMIN']), controller.getUsers)

export default router
