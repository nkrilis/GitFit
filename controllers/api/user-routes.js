const router = require('express').Router();
const { User } = require('../../models');


router.post('/', async (req, res) => {
  try 
  {
    const dbUserData = await User.create(req.body);
  
    req.session.save(() => 
    {
      req.session.loggedIn = false;
      req.session.category = dbUserData.category_id;

      res.status(200).json(dbUserData);
    });

  } 
  catch (err) 
  {
    console.log(err);
    res.status(500).json(err);
  }
});

// router.put('/update', (req, res) => 
// {
//   if (req.session.loggedIn) {
//     res.redirect('/');
//     return;
//   }

//   res.render('update');
// });

  // Login
router.post('/login', async (req, res) => {
    try {
      const dbUserData = await User.findOne({
        where: {
          email: req.body.email,
        },
      });
  
      if (!dbUserData) {
        res
          .status(400)
          .json({ message: 'Incorrect email or password. Please try again!' });
        return;
      }
  
      const validPassword = await dbUserData.checkPassword(req.body.password);
  
      if (!validPassword) {
        res
          .status(400)
          .json({ message: 'Incorrect email or password. Please try again!' });
        return;
      }
  
      req.session.save(() => {
        req.session.loggedIn = true;
        req.session.category = dbUserData.category_id;
  
        res
          .status(200)
          .json({ user: dbUserData, category: dbUserData.category_id, message: 'You are now logged in!' });
      });
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  });
  
  // // Logout
  router.post('/logout', (req, res) => {
    if (req.session.loggedIn) {
      req.session.destroy(() => {
        res.status(204).end();
      });
    } else {
      res.status(404).end();
    }
  });
  
  module.exports = router;
  
  