import { Router } from "express"
import passport from "passport"

const router = Router()


router
    .get('/', (req, res) => { res.send('Welcome User') })
    .post('/', passport.authenticate('local-register', {

        successRedirect: '/users',
        failureRedirect: '/register',
        passReqToCallback: true
    }))



export default router