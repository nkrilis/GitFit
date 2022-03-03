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

// router.get('/', withAuth, async (req, res) => 
// {
//   if (req.session.loggedIn) {
//     res.redirect('/');
//     return;
//   }

// });

router.get('/', async (req, res) => {
    try {
      const dbWorkoutData = await Category.findOne({
        where: { id: 3 },
        include: [
            {
                model: Workout,
                attributes: ['id','name', 'sets', 'reps', 'rpe'],
            },
        ],
      });
  
      const categoryData = dbWorkoutData.get({ plain: true });

      // res.status(200).send(workout);
  

      res.render('homepage', {
        categoryData,
        loggedIn: req.session.loggedIn,
      });
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  });
  
  module.exports = router;