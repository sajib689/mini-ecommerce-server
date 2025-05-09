import express from 'express'
import { userRegisterController } from '../controller/user.controller'

const userRouter = express.Router()

userRouter.post('/register', userRegisterController)

export default userRouter