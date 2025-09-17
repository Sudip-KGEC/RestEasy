const Listing = require('../models/listing.model.js');
const AppError = require('../utils/AppError.js')


module.exports.index = async (req, res) => {
    let alllisting = await Listing.find({})
    res.render('listings/index', { alllisting })
}


module.exports.createListingForm = (req, res) => {
    res.render('listings/new.ejs');
}


module.exports.createNewListing = async (req, res, next) => {
    // --- Geocoding Logic ---
    const locationQuery = encodeURIComponent(req.body.listing.location);
    const geocodingUrl = `https://api.maptiler.com/geocoding/${locationQuery}.json?key=${process.env.MAPTILER_API_KEY}`;

    let response;
    try {
        response = await fetch(geocodingUrl);
        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
    } catch (err) {
        req.flash("error", "Could not verify location, please check and try again.");
        return res.redirect("/listings/new");
    }
    const data = await response.json();
    // --- End of Geocoding Logic ---

    const newListing = new Listing(req.body.listing);
    newListing.owner = req.user._id;

    // --- Save Coordinates ---
    if (data.features && data.features.length > 0) {
        newListing.geometry = data.features[0].geometry;
    } else {
        req.flash("error", "Location not found. Please enter a valid location.");
        return res.redirect("/listings/new");
    }

    // Check if a file was uploaded before trying to access it
    if (req.file) {
        newListing.image = { url: req.file.path, filename: req.file.filename };
    }
    // --- END OF SAFETY CHECK ---
    await newListing.save();
    req.flash('success', 'New listing created Successfully!');
    res.redirect('/listings');
};



module.exports.showListing = async (req, res) => {
    const { id } = req.params;
    const listing = await Listing.findById(id).populate({
        path: "reviews",        // First, populate the reviews array
        populate: {
            path: "author",     // Then, for each review, populate its author
        },
    })
        .populate("owner");      // Also, populate the owner of the listing
    ;
    if (!listing) {
        throw new AppError("Listing not found", 404);
    }
    res.render('listings/show', { listing, mapTilerApiKey: process.env.MAPTILER_API_KEY })
}



module.exports.updateListingForm = async (req, res) => {
    const { id } = req.params;
    const listing = await Listing.findById(id);
    if (!listing) {
        req.flash('error', "Listing request does not exist!")
        req.redirect('/listings')
    }
    let originalUrl = listing.image.url;
    originalUrl = originalUrl.replace('/upload', '/upload/w_250')
    res.render('listings/edit', { listing, originalUrl })
}





    
module.exports.updateListing = async (req, res) => {
    const { id } = req.params;
    const listing = await Listing.findById(id);

    if (!listing) {
        req.flash("error", "Cannot find that listing to update!");
        return res.redirect("/listings");
    }

    // Update details
    Object.assign(listing, req.body.listing);

    // Update image if new file uploaded
    if (req.file) {
        listing.image = { url: req.file.path, filename: req.file.filename };
    }

    // --- Geocoding Logic (same as createNewListing) ---
    const locationQuery = encodeURIComponent(req.body.listing.location);
    const geocodingUrl = `https://api.maptiler.com/geocoding/${locationQuery}.json?key=${process.env.MAPTILER_API_KEY}`;

    try {
        const response = await fetch(geocodingUrl);
        const data = await response.json();

        if (data.features && data.features.length > 0) {
            listing.geometry = data.features[0].geometry;
        }
    } catch (err) {
        console.error("Geocoding failed:", err.message);
    }
    // --- End Geocoding ---

    await listing.save();
    req.flash("success", "Listing Updated Successfully!");
    res.redirect(`/listings/${id}`);
};
    // const { id } = req.params;
    // const listing = await Listing.findById(id);
    // if (!listing) {
    //     req.flash("error", "Cannot find that listing to update!");
    //     return res.redirect("/listings");
    // }
    // // Object.assign is a clean way to copy properties from one object to another
    // Object.assign(listing, req.body.listing);
    // // 3. If a new file was uploaded, update the image property
    // if (req.file) {
    //     listing.image = { url: req.file.path, filename: req.file.filename };
    // }
    //  // 4. Geocode the new location to get updated coordinates
    // const geocodingResult = await maptilerSDK.geocoding.forward(
    //     req.body.listing.location,
    //     { limit: 1 }
    // );
    // if (geocodingResult.features[0]) {
    //     listing.geometry = geocodingResult.features[0].geometry;
    // } 
    // await listing.save();
    // req.flash('success', 'Listing Updated Successfully!');
    // res.redirect(`/listings/${id}`);




module.exports.destroyListing = async (req, res) => {
    const { id } = req.params;
    await Listing.findByIdAndDelete(id);
    res.redirect('/listings')
}



module.exports.searchListings = async(req , res ) => {
    const { q } = req.query;
    const listings = await Listing.find({ $text: { $search: q } });
    res.render("listings/results.ejs", { listings, query: q });
    
}


module.exports.getSuggestions = async (req , res ) => {
     const { q } = req.query;
    if (!q) {
        return res.json([]);
    }
    // Find distinct locations that start with the query, case-insensitive
    const suggestions = await Listing.find(
        { location: { $regex: `^${q}`, $options: "i" } }
    ).distinct('location').limit(5);
    
    res.json(suggestions)
}