const sequelize = require('../config/connection');
const seedCategory = require('./categoryData');
const seedWorkout = require('./workoutData');
const seedWorkoutCategory = require('./workoutCategoryData');

const userData = require('./userData.json');
const { User } = require('../models');

const seedAll = async () =>
{
    await sequelize.sync({ force: true });

    await seedWorkout();

    await seedCategory();

    await seedWorkoutCategory();

    await User.bulkCreate(userData, {
        individualHooks: true,
        returning: true,
    });

    process.exit(0);
};

seedAll();