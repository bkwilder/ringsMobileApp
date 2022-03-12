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

router.post("/",requireUserToken, async (req, res, next) => {
  try {
    if(req.user){
      if (!req.user) throw new Error('Unauthorized');
      const newQuiz = await Quiz.create(req.body);
      const newRing = await req.user.addQuiz(newQuiz)
      res.send(newRing);
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


router.delete("/:id",requireUserToken, async (req, res, next) => {
  try {
    if(req.user){
      if (!req.admin) throw new Error('Unauthorized');
      const pie = await Pie.findByPk(req.params.id);
      if (!pie) {
        let err = new Error('Cannot remove pie - ID not found!');
        err.status = 404;
        next(err);
      }
      await pie.destroy();
      res.sendStatus(204);
    }
  } catch (error) {
      next(error)
  }
});
