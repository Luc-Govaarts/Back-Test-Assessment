const { Router } = require("express")
// const authMiddleware = require("../auth/middleware");
const Homepages = require("../models").homepage
const stories = require("../models").story

const router = new Router();

router.get("/homepage", async (req, res, next) => {
    try {
        const homePages = await Homepages.findAll({include: stories})
        res.send(homePages)
    } catch(error) {
        console.log(error);
    }
})

module.exports = router;