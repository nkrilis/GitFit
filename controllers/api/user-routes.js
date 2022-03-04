const router = require('express').Router();
const { User } = require('../../models');

const withAuth = require('../../utils/auth');


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

router.put('/update', withAuth, async (req, res) => 
{
  try{
    const dbUserData = await User.update(
      {
        height: req.body.height,
        weight: req.body.weight,
        age: req.body.age,
        category_id: req.body.category_id
      },
      {
        where: {id: req.session.user_id}
      });

      if (!dbUserData)
      {
        res.status(500).json({message: "User not updated"});
      }

      req.session.save(() => {
        req.session.loggedIn = true;
        req.session.category = req.body.category_id;

        res.status(200).json({message: "Updated successfully"});
      });
  }
  catch(err)
  {
    console.log(err);
    res.status(500).json(err);
  }
});

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
        req.session.user_id = dbUserData.id;
  
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
  
  