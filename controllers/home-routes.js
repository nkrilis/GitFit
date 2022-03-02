const router = require('express').Router();
const { Category, Workout } = require('../models');

const withAuth = require('../utils/auth');