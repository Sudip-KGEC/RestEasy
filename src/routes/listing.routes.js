const express = require('express');
const router = express.Router();
const { index, createNewListing, createListingForm, updateListingForm, showListing, updateListing, destroyListing , searchListings , getSuggestions} = require('../controllers/listings.controller.js');
const { wrapAsyncFunction } = require('../utils/wrapAsync.js');
const { validationListing } = require('../middleware/validationListing.js');

const { isOwner } = require('../middleware/isOwner.js')
const { isLoggedIn } = require('../middleware/isLogIn.js')

const multer = require('multer')
const { storage } = require('../services/cloudinary.config.js')
const upload = multer({ storage })


router.route('/')
    .get(wrapAsyncFunction(index))
    .post(isLoggedIn, upload.single('listing[image]'), validationListing, wrapAsyncFunction(createNewListing)); // 

 router.get('/search' , wrapAsyncFunction(searchListings))  ;
 router.get('/api/suggestions', wrapAsyncFunction(getSuggestions));

router.get('/new', isLoggedIn, createListingForm);
router.get('/:id/edit', isLoggedIn, isOwner, wrapAsyncFunction(updateListingForm));

router.route('/:id')
    .get(wrapAsyncFunction(showListing))
    .put(isLoggedIn, upload.single('listing[image]'), validationListing, isOwner, wrapAsyncFunction(updateListing))
    .delete(isLoggedIn, isOwner, wrapAsyncFunction(destroyListing));



module.exports = router