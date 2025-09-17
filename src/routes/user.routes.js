const express = require('express');
const passport = require('passport')
const router = express.Router();
const { renderSignUpForm, createNewUser, renderLoginForm, loginUser, logoutUser } = require('../controllers/user.controller.js');


const loginCheckvalidation = {
        failureRedirect: '/login',
        failureFlash: true
}

router.route('/')

// add loading later 
        .get((req, res) => {
                res.redirect('/listings')
        })

router.route('/signup')
        .get(renderSignUpForm)
        .post(createNewUser);

router.route('/login')
        .get(renderLoginForm)
        .post(passport.authenticate('local', loginCheckvalidation), loginUser)

router.get('/logout', logoutUser)

module.exports = router;