import express from 'express'
import { httpSignUp, httpSignIn, httpSignOut } from './auth.controllers'
 

const authRoute = express.Router()

authRoute.post('/signup' , httpSignUp)
authRoute.post('/signin' , httpSignIn)
authRoute.get('/signout' , httpSignOut)

export default authRoute    