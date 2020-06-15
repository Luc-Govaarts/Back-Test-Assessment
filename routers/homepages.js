const { Router } = require("express")
// const authMiddleware = require("../auth/middleware");
const Homepages = require("../models").homepage

const router = new Router();

router.get("/homepage", async (req, res, next) => {
    try {
        const homePages = await Homepages.findAll()
        res.send(homePages)
    } catch(error) {
        console.log(error);
    }
})

module.exports = router;