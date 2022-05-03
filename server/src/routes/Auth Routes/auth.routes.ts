import express from 'express'
import { httpSignup, httpSignIn } from './auth.controllers'
 

const authRoute = express.Router()

authRoute.post('/signup' , httpSignup)
authRoute.post('/signin' , httpSignIn)

export default authRoute