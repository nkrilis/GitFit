const { Workout } = require('../models');

const workoutdata = [
    {
        name: 'Back Squat',
        sets: 4,
        reps: 5,
        rpe: 70,
    },
    {
        name: 'Deadlift',
        sets: 2,
        reps: 8,
        rpe: 65,
    },
    {
        name: 'Barbell Hip Thrust',
        sets: 3,
        reps: 12,
        rpe: 60,
    },
];

const seedWorkout = () => Workout.bulkCreate(workoutdata);

module.exports = seedWorkout;