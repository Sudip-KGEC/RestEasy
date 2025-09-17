const Listing = require('../models/listing.model');

module.exports.isOwner = async (req, res, next) => {
    const { id } = req.params;
    const listing = await Listing.findById(id);

    if (!listing || !listing.owner) {
        req.flash('error', 'Cannot find that listing!');
        return res.redirect('/listings');
    }

    if (!listing.owner.equals(req.user._id)) {
        req.flash('error', 'You are not the owner of this listing!');
        return res.redirect(`/listings/${id}`)
    }

    next()
}