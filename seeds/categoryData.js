const { Category } = require('../models');

const categorydata = [
    {
        name: 'Body Building',
        workout_id: 1
    },
    {
        name: 'Power Lifting',
        workout_id: 2,
    },
    {
        name: 'Hypertrophy Training',
        workout_id: 3,
    },
];

const seedCategory = () => Category.bulkCreate(categorydata);

module.exports = seedCategory;