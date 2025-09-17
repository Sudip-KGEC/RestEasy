const Review = require('../models/review.model.js');
const Listing = require('../models/listing.model.js');

module.exports.createReview = async (req, res) => {
    const { id } = req.params;
    const listing = await Listing.findById(id); // <-- await added
    const newReview = new Review(req.body.review);
    newReview.author = req.user._id;

    listing.reviews.push(newReview);

    await newReview.save();
    await listing.save();

    req.flash('success', 'Thank you for your valuable review!'); 
    res.redirect(`/listings/${listing._id}`);
};


module.exports.renderReviewEditForm = async (req, res) => {
    const { id, reviewId } = req.params;
    const review = await Review.findById(reviewId);
    if (!review) {
        req.flash('error', 'Cannot find that review to edit!');
        return res.redirect(`/listings/${id}`);
    }
    res.render('reviews/edit.ejs', { review, listingId: id });
};

module.exports.updateReview = async (req, res) => {
    const { id, reviewId } = req.params;
    await Review.findByIdAndUpdate(reviewId, req.body.review);
    req.flash('success', 'Review Updated Successfully!');
    res.redirect(`/listings/${id}`);
};

module.exports.destroyReview = async (req, res) => {
    const { id, reviewId } = req.params;

    await Listing.findByIdAndUpdate(id, { $pull: { reviews: reviewId } });
    await Review.findByIdAndDelete(reviewId);

    req.flash('success', 'Review deleted successfully!');
    res.redirect(`/listings/${id}`);
};