import express from 'express'
import { httpSignup } from './auth.controllers'
 

const authRoute = express.Router()

authRoute.post('/signup' , httpSignup)

export default authRoute