const router = require('express').Router();
const { Category, Workout, User } = require('../models');

const withAuth = require('../utils/auth');

router.get('/')

router.get('/', async (req, res) => {
    try {
      const dbWorkoutData = await Category.findOne({
        where: { id: 1 },
        include: [
            {
                model: Workout,
                attributes: ['name', 'sets', 'reps', 'rpe'],
            },
        ],
      });
  
    //   const workouts = dbWorkoutData.map((workout) =>
    //     workout.get({ plain: true })
    //   );

      res.status(200).json(dbWorkoutData);
  

    //   res.render('homepage', {
    //     workouts,
    //     loggedIn: req.session.loggedIn,
    //   });
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  });
  
  module.exports = router;