if(process.env.NODE_ENV != 'production'){
    require('dotenv').config({ override: true })
}


const express = require('express');
const connectDB = require('./src/DB/connectDB.js')
const path = require('path');
const methodOverride = require('method-override');
const ejsMate = require('ejs-mate');
const session = require('express-session');
const flash = require('connect-flash');
const passport = require('passport');
const LocalStrategy = require('passport-local');
/* Routes & Models */
const listingsRoute = require('./src/routes/listing.routes.js');
const userRoute = require('./src/routes/user.routes.js');
const reviewRoute = require('./src/routes/review.routes.js')
const User = require('./src/models/user.model.js');

const app = express();


// connect to Database 
connectDB()
    .then(() => {
        console.log('DB connected Successfully .....')
    })
    .catch(err => console.log(err));

// Middlewares
app.engine('ejs', ejsMate);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'src/views'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'));

// Authentication Middlewares 
const sessionOptions = {
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: {
        expires: Date.now() + 7 * 24 * 60 * 60 * 1000,
        maxAge: 7 * 24 * 60 * 60 * 1000,
        httpOnly: true
    }
};

app.use(session(sessionOptions));
app.use(flash());

app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());


// Global Middleware to pass variables to all ejs files.
app.use((req, res, next) => {
    res.locals.success = req.flash('success');
    res.locals.error = req.flash('error');
    res.locals.currentUser = req.user;
    next();
});

// All Routes 
app.use("/", userRoute);
app.use('/listings', listingsRoute);
app.use('/listings/:id/reviews', reviewRoute)

// Express error handling middleware
app.use((err, req, res, next) => {
    const { statusCode = 500, message = "Something went wrong!" } = err;
    res.status(statusCode).render("error.ejs", { err });
});

app.listen(4000, () => {
    console.log('server is running on port 4000 ');
});