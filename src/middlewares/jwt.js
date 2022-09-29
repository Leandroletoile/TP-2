import jwt from "jsonwebtoken"

const checkLoggedIn = (req, res, next) => {
    const token = req.headers.authorization.split(' ')[1];
    let decoded = jwt.decode(token, { complete: true })
    if (!decoded) {
        const e = new Error("UNAUTHORIZED(401)")
        res.status(401).send(error.message)
        next(e)
    }
    else {
        next()
    }
}

const checkAdmin = (req, res, next) => {
    const token = req.headers.authorization.split(' ')[1];
    let decoded = jwt.decode(token, { complete: true })
    if (!decoded || decoded.payload.role !== "ADMIN") {
        const e = new Error("UNAUTHORIZED(401)")
        res.status(401).send(error.message)
        next(e)
    }
    else {
        next()
    }
}


const checkLoggedUser = (req, res, next) => {
    const token = req.headers.authorization.split(' ')[1];
    let decoded = jwt.decode(token, { complete: true });
    if (!decoded) {
        const e = new Error("UNAUTHORIZED(401)")
        res.status(401).send(error.message)
        next(e)
    }
    else {
        req.user = decoded.payload.usuario
        next()
    }
}

export {
    checkLoggedIn,
    checkAdmin,
    checkLoggedUser
}
