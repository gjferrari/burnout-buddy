// need routes
// get all questions (or hardcode into handlebars)

// save user answers (put route to User model - quiz score key)
// will probably need an additional js file to handle answer clicks

const router = require("express").Router();
const { Questions, Feeling } = require("../../models");

// The `/api/categories` endpoint

router.get("/", (req, res) => {
  // find all questions
  // be sure to include its associated answers
  Questions.findAll({
    include: [Feeling],
  })
    .then((questions) => res.json(questions))
    .catch((err) => res.status(500).json(err));
});

router.get("/:id", (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
  Questions.findOne({
    where: {
      id: req.params.id,
    },
    include: [Feeling],
  })
    .then((questions) => res.json(questions))
    .catch((err) => res.status(400).json(err));
});

router.post('/', async (req, res) => {
  try {
    const feelingData = await Feeling.create(req.body);

    req.session.save(() => {
      // req.session.user_id = user_id;

      res.status(200).json(feelingData);
    });
  } catch (err) {
    res.status(400).json(err);
  }
});




router.post("/", (req, res) => {
  // create a new question
  Questions.create(req.body)
    .then((questions) => res.status(200).json(questions))
    .catch((err) => res.status(400).json(err));
});

router.put("/:id", (req, res) => {
  // update a question by its `id` value
  Questions.update(req.body, {
    where: {
      id: req.params.id,
    },
  })
    .then((questions) => res.status(200).json(questions))
    .catch((err) => res.status(400).json(err));
});

router.delete("/:id", (req, res) => {
  // delete a question by its `id` value
  Questions.destroy({
    where: {
      id: req.params.id,
    },
  })
    .then((questions) => res.status(200).json(questions))
    .catch((err) => res.status(400).json(err));
});

module.exports = router;
