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
     const rings = await Promise.all(ringIds.map(async (ringId) => { 
       const quiz = await Quiz.findByPk(ringId.quizId)
       return ({ringId: ringId.id, ...quiz.dataValues})
     }))
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
     res.send({id: ring.id, quiz: quiz, notes:notes})
    }
  } catch (error) {
      next(error)
  }
});


router.delete("/:id",requireUserToken, async (req, res, next) => {
  try {
    if(req.user){
      if (!req.user) throw new Error("You're not real!");

      const ring = await Ring.findByPk(req.params.id);
      if(ring.userId !== req.user.id) throw new Error('This is not your ring!');
      await ring.destroy();

      const quiz = await Quiz.findByPk(ring.quizId)
      if (!quiz) {
        let err = new Error('Cannot remove quiz - quiz not found!');
        err.status = 404;
        next(err);
      }

      if(quiz.createdByAdmin) throw new Error('Unauthorized to Delete');
      await quiz.destroy()
      res.sendStatus(204);
    }
  } catch (error) {
      next(error)
  }
});
