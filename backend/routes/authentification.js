const express = require('express');
const { signUp, signIn } = require('../controllers/auth.controller');
const { signUpRules, validator, signInRules } = require('../validations/authValidation');
const router = express.Router();

//Register 
// Path: /register
router.post("/register", signUpRules(), validator, signUp);

//Login
//Path: /login
router.post('/login', signInRules(), validator, signIn);

module.exports = router;