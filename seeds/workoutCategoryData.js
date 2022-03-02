// const { WorkoutCategory } = require('../models');

const WorkoutCategory = require('../models/WorkoutCategory');

const workoutCategoryData = [
    {
        workout_id: 1,
        category_id: 1,
    },
    {
        workout_id: 1,
        category_id: 2,
    },
    {
        workout_id: 2,
        category_id: 2
    }
];

const seedWorkoutCategory = () => WorkoutCategory.bulkCreate(workoutCategoryData);

module.exports = seedWorkoutCategory;