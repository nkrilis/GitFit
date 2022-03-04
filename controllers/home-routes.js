const router = require('express').Router();
const { Category, Workout, User } = require('../models');

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

      const dbUserData = await User.findOne({
        where: { id: req.session.user_id }
      });

      const userData = dbUserData.get({ plain: true });
  
      const categoryData = dbWorkoutData.get({ plain: true });

      res.render('homepage', {
        categoryData,
        userData,
        loggedIn: req.session.loggedIn,
        category: req.session.category
      });

    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  });
  
  module.exports = router;