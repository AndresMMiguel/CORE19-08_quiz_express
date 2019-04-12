const Sequelize = require('sequelize');
const sequelize = require('../models/index');


exports.index = (req, res,next) => {
    sequelize.models.quiz.findAll()
        .then(quizzes => {
            res.render('quizzes/index.ejs', {quizzes});
        })
        .catch(error => next(error));
};