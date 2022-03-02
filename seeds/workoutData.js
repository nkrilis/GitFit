const { Workout } = require('../models');

const workoutdata = [
    {
        name: 'Back Squat',
        sets: 4,
        reps: 5,
    },
    {
        name: 'Deadlift',
        sets: 2,
        reps: 8,
    },
    {
        name: 'Barbell Hip Thrust',
        sets: 3,
        reps: 12,
    },
];

const seedWorkout = () => Workout.bulkCreate(workoutdata);

module.exports = seedWorkout;