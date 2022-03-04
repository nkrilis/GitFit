const router = require('express').Router();
const { Category, Workout } = require('../models');

const withAuth = require('../utils/auth');

router.get('/login', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }

  res.render('login');
});

router.get('/signup', (req, res) => 
{
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }

  res.render('signup');
});

router.get('/update', withAuth, (req, res) => 
{
  if (req.session.loggedIn) {
    res.render('update', {
      loggedIn: req.session.loggedIn,
    });
    return;
  }

  res.redirect('/');
});


router.get('/', withAuth, async (req, res) => {
    try {
      const dbWorkoutData = await Category.findOne({
        where: { id: req.session.category },
        include: [
            {
                model: Workout,
                attributes: ['id','name', 'sets', 'reps', 'rpe'],
            },
        ],
      });
  
      const categoryData = dbWorkoutData.get({ plain: true });
      // const categoryData = dbWorkoutData.map((info) => info.get({ plain: true }));

      // res.status(200).json(categoryData);
  

      res.render('homepage', {
        categoryData,
        loggedIn: req.session.loggedIn,
        category: req.session.category
      });

    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  });
  
  module.exports = router;