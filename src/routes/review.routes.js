const express = require('express');
const router = express.Router({ mergeParams: true });

const { createReview, destroyReview, renderReviewEditForm, updateReview } = require('../controllers/review.controller.js');
const { isLoggedIn } = require('../middleware/isLogIn.js')
const { isReviewAuthor } = require('../middleware/isReviewAuthor.js')
const { wrapAsyncFunction } = require('../utils/wrapAsync.js');


router.post('/', isLoggedIn, wrapAsyncFunction(createReview));
router.get('/:reviewId/edit', isLoggedIn, isReviewAuthor, wrapAsyncFunction(renderReviewEditForm));

router.route('/:reviewId')
    .put(isLoggedIn, isReviewAuthor, wrapAsyncFunction(updateReview))
    .delete(isLoggedIn, isReviewAuthor, wrapAsyncFunction(destroyReview))


module.exports = router;