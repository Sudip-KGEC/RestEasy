
const User = require('../models/user.model.js');

module.exports.renderSignUpForm = (req, res) => {
    res.render('users/signup')
};


module.exports.createNewUser = async (req, res, next) => {
    try {
        const { email, username, password } = req.body;
        const newUser = new User({ email, username });
        const registeredUser = await User.register(newUser, password);

        req.login(registeredUser, (err) => {
            if (err) {
                return next(err);
            }
            req.flash('success', 'Welcome to RestEasy! You are now registered.');
            res.redirect('/listings');
        });

    } catch (e) {
        req.flash('error', e.message);
        res.redirect('/signup');
    }
}


module.exports.renderLoginForm = (req, res) => {
    res.render('users/login.ejs');
};

module.exports.loginUser = (req, res) => {
    req.flash('success', 'Welcome back to RestEasy!');
    res.redirect('/listings');
};

module.exports.logoutUser = (req, res, next) => {
    req.logout((err) => {
        if (err) {
            return next(err);
        }
        req.flash('success', 'You have been logged out.');
        res.redirect('/listings');
    });
};