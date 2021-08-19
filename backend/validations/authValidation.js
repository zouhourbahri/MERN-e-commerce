const { check, validationResult } = require('express-validator');

exports.signUpRules = () => [
    check(`email`, `This is not a valid email!`).isEmail(),
    check(`password`, `Must contain at least 3 characters`).isLength({ min: 3 }),
];

exports.signInRules = () => [
    check(`email`, `This is not a valid email!`).isEmail(),
    check(`email`, `This field is required!`).notEmpty(),
    check(`password`, `This field is required!`).notEmpty(),
]

exports.resetPass = () => [
    check(`email`, `This is not a valid email!`).isEmail()
]

exports.forgetPass = () => [
    check(`password`, `Must contain at least 3 characters`).isLength({ min: 3 }),
]

exports.validator = (req, res, next) => {
    const errors = validationResult(req);
    errors.isEmpty() ? next() : res.status(400).json({ errors: errors.array() });
};