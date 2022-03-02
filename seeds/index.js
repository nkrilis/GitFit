const sequelize = require('../config/connection');
const seedCategory = require('./categoryData');
const seedWorkout = require('./workoutData');

const seedAll = async () =>
{
    await sequelize.sync({ force: true });

    await seedWorkout();

    await seedCategory();

    process.exit(0);
};

seedAll();