const jwt = require("jsonwebtoken")

const roleMiddleware = (req,res,next) => {
    const token = req.headers.authorization ?? null
    if (!token) return res.send("Not Authorized Bruv")

    try {
        const allowedRole = "admin"
        const payload = jwt.verify(token, process.env.JWT_SECRET);
        if(!payload) return res.send("no payload")
        console.log(payload.user.role)
        if(payload.user.role != allowedRole) {
            res.json("Unauthorized")
        } else {
            next()
        }
        // next();
    } catch(err) {
        res.send(err)
    }
}

module.exports = {roleMiddleware}