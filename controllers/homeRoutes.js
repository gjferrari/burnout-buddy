const router = require('express').Router();
const { Category, Product } = require('../models');



router.get('/', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/profile'); // change this
    return;
  }

  res.render('landingpage');
});

// activity page
router.get('/activity', async (req, res) => {
  try {
    const activityData = await Category.findAll({
      include: [
        {
          model: Product
        },
      ],
    });

    const activity = activityData.map((activity) => activity.get({plain: true}));
    console.log(activity)
    res.render('activity', {
      activity
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// timer page route
router.get('/timer', (req, res) => {
  res.render('timer');
});

// finished activity page route
router.get('/finishedactivity', (req, res) => {
  res.render('finishedactivity')
})

// time quiz page route
router.get('/timeQuiz', (req, res) => {
  res.render('timeQuiz')
})

// GET one category
router.get('/category/:id', async (req, res) => {
  // If the user is not logged in, redirect the user to the login page
  if (!req.session.loggedIn) {
    res.redirect('/login');
  } else {
    // If the user is logged in, allow them to view the gallery
    try {
      const dbCategoryData = await Category.findByPk(req.params.id, {
        include: [
          {
            model: Product,
            attributes: [
                // todo: need attributes for product
              '',
            ],
          },
        ],
      });
      const category = dbCategoryData.get({ plain: true });
      res.render('category', { category, loggedIn: req.session.loggedIn });
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  }
});

// GET one product
router.get('/product/:id', async (req, res) => {
  // If the user is not logged in, redirect the user to the login page
  if (!req.session.loggedIn) {
    res.redirect('/login');
  } else {
    // If the user is logged in, allow them to view the product
    try {
      const dbProductData = await Painting.findByPk(req.params.id);

      const product = dbProductData.get({ plain: true });

      res.render('product', { product, loggedIn: req.session.loggedIn });
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  }
});

router.get('/login', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }

  res.render('login');
});

module.exports = router;


