const { check, validationResult } = require('express-validator');

exports.signUpRules = () => [
    check(`email`, `This is not a valid email!`).isEmail()
]