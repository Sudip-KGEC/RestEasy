const { JoiValidation } = require('../schemas/joiValidation.js');
const AppError = require('../utils/AppError.js')


module.exports.validationListing = (req, res, next) => {
    const { error } = JoiValidation.validate(req.body)
    if (error) {
        const errMsg = error.details.map(el => el.message).join(',');
        throw new AppError(errMsg, 400)
    }

    next()
}
