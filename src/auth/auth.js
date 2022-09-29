import passport from "passport";
import { Strategy as LocalStrategy } from 'passport-local'
import User from "../models/User.js"
import { generateHash } from '../utils/hash.js'
import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()



passport.serializeUser((user, done) => {
    done(null, user.id)
})

passport.deserializeUser(async (id, done) => {
    const user = await User.getUser(id)
    done(null, user)
})

passport.use('local-register', new LocalStrategy({

    emailField: 'email',
    passwordField: 'password',
    passReqToCallback: true

}, async (_, email, password, done) => {

    const thereIsUser = await prisma.user.findUnique({ where: { email: email } })
    const newUser = {
        email,
        password: generateHash(password)
    }
    if (thereIsUser) {
        return done(null, false)
    } else {
        await User.createUser({ ...newUser })
        done({ ...newUser })
    }
}
))