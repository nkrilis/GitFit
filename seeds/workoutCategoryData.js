// const { WorkoutCategory } = require('../models');

const WorkoutCategory = require('../models/WorkoutCategory');

const workoutCategoryData = [
    {
        workout_id: 1,
        category_id: 1,
    },
    {
        workout_id: 2,
        category_id: 1,
    },
    {
        workout_id: 3,
        category_id: 1,
    },
    {
        workout_id: 4,
        category_id: 1,
    },
    {
        workout_id: 1,
        category_id: 2,
    },
    {
        workout_id: 2,
        category_id: 2,
    },
    {
        workout_id: 3,
        category_id: 2
    },
    {
        workout_id: 5,
        category_id: 2,
    },
    {
        workout_id: 6,
        category_id: 2,
    },
    {
        workout_id: 7,
        category_id: 2,
    },
    {
        workout_id: 10,
        category_id: 3,
    },
    {
        workout_id: 9,
        category_id: 3,
    },
    {
        workout_id: 8,
        category_id: 3,
    },
    {
        workout_id: 7,
        category_id: 3,
    },
    {
        workout_id: 6,
        category_id: 3,
    },
];

const seedWorkoutCategory = () => WorkoutCategory.bulkCreate(workoutCategoryData);

module.exports = seedWorkoutCategory;