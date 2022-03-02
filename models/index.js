const User = require('./User');
const Workout = require('./Workout');
const Category = require('./Category');
const WorkoutCategory = require('./WorkoutCategory');

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
    through: WorkoutCategory,
    foreignKey: 'workout_id'
});

Category.belongsToMany(Workout, {
    through: WorkoutCategory,
    foreignKey: 'category_id'
});


module.exports = { User, Workout, Category };