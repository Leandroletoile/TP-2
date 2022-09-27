import passport from "passport";
import { Strategy as LocalStrategy } from 'passport-local'
import User from "../models/User.js"
import { generateHash } from '../utils/hash.js'
import bcrypt from "bcrypt"



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

}, async (req, email, password, done) => {

    const thereIsUser = await User.getUserByEmail(email)
    const newUser = {
        ...req.body,
        password: generateHash(password)
    }
    if (thereIsUser) {
        return done(null, false)
    } else {
        await User.createUser(newUser)
        done(newUser)
    }
}
))