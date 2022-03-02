const User = require('./User');
const Workout = require('./Workout');
const Category = require('./Category');

Category.hasMany(User, {
    foreignKey: 'category_id'
});

User.belongsTo(Category, {
    foreignKey: 'category_id'
});

// Category.hasMany(Workout, {
//     foreignKey: 'workout_id'
// });

Workout.belongsToMany(Category, {
    through: Category,
    foreignKey: 'workout_id'
});


module.exports = { User, Workout, Category };