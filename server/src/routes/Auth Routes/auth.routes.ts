import express from 'express'
import { httpSignup, httpSignIn, httpSignOut } from './auth.controllers'
 

const authRoute = express.Router()

authRoute.post('/signup' , httpSignup)
authRoute.post('/signin' , httpSignIn)
authRoute.get('/signout' , httpSignOut)

export default authRoute    