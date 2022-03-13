const router = require("express").Router();
const {
  models: { User },
} = require("../db");
const { requireAdminToken, requireUserToken } = require("./gatekeeper");

module.exports = router;

router.get("/", async (req, res, next) => {
  try {
    const users = await User.findAll({
      attributes: ["id", "username"],
    });
    res.json(users);
  } catch (err) {
    next(err);
  }
});

router.put("/:id", requireUserToken, async (req, res, next) => {
  try {
    if (req.user) {
      const user = req.user;
      await user.update({ ...req.body });
    }
    res.status(204).end();
  } catch (err) {
    next(err);
  }
});
