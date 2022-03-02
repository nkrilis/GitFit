const { Category } = require('../models');

const categorydata = [
    {
        name: 'Body Building',
    },
    {
        name: 'Power Lifting',
    },
    {
        name: 'Hypertrophy Training',
    },
];

const seedCategory = () => Category.bulkCreate(categorydata);

module.exports = seedCategory;