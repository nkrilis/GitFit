const sequelize = require('../config/connection');
const seedCategory = require('./categoryData');
const seedWorkout = require('./workoutData');
const seedWorkoutCategory = require('./workoutCategoryData');

const seedAll = async () =>
{
    await sequelize.sync({ force: true });

    await seedWorkout();

    await seedCategory();

    await seedWorkoutCategory();

    process.exit(0);
};

seedAll();