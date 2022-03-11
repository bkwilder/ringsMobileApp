const router = require("express").Router();
const {
  models: { User, Quiz, Ring, Note },
} = require("../db");
const { requireAdminToken, requireUserToken } = require("./gatekeeper");

module.exports = router;

// GET /api/rings
router.get("/",requireUserToken, async (req, res, next) => {
  try {
    if(req.user){
     const ringIds =  await Ring.findAll({where: {userId: req.user.id}})
     const rings = await Promise.all(ringIds.map(ringId=> Quiz.findByPk(ringId.quizId)))
     res.send(rings);
    }
  } catch (error) {
      next(error)
  }
});

// GET /api/rings/:id
router.get("/:id",requireUserToken, async (req, res, next) => {
  try {
    if(req.user){
     const ring =  await Ring.findByPk(req.params.id)
     const quiz = await Quiz.findByPk(ring.quizId)
     const notes = await Note.findAll({where: {ringId: ring.id}})
     res.send({quiz: quiz, notes:notes})
    }
  } catch (error) {
      next(error)
  }
});
