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
    {
        name: 'Dumbell Walking Lunge',
        sets: 2,
        reps: 20,
        rpe: 70,
    },
    {
        name: 'A1: Leg Extension',
        sets: 3,
        reps: 15,
        rpe: 70,
    },
    {
        name: 'A2: Seated Leg Curl',
        sets: 3,
        reps: 15,
        rpe: 70,
    },
    {
        name: 'Standing Calf Raise',
        sets: 3,
        reps: 10,
        rpe: 70,
    },
    {
        name: 'Barbell Bench Press',
        sets: 3,
        reps: 4,
        rpe: 75,
    },
    {
        name: 'Dumbell Seated Shoulder Press',
        sets: 3,
        reps: 10,
        rpe: 70,
    },
    {
        name: 'Weighted Dip',
        sets: 3,
        reps: 10,
        rpe: 70,
    },
];

const seedWorkout = () => Workout.bulkCreate(workoutdata);

module.exports = seedWorkout;