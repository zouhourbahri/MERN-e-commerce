const { check, validationResult } = require('express-validator');

exports.signUpRules = () => [
    check(`email`, `This is not a valid email!`).isEmail(),
    check(`password`, `Must contain at least 3 characters`).isLength({min: 3}),
];

exports.validator = (req, res, next) => {
    const errors = validationResult(req);
    errors.isEmpty()? next() : res.status(400).json({errors: errors.array()});
};