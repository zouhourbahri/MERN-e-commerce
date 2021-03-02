const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('config');
const User = require('../models/User');


const secretOrKey = config.get('secretOrKey');

// Register Controller
exports.signUp = async (req, res) => {
    const {firstName, lastName, email, password} = req.body;
    try {
        const searchedEmail = await User.findOne({email});
        if (searchedEmail)
            return res.status(400).json({msg: 'email already exists !!'});
            const salt = await bcrypt.genSalt(10);
            const hash = await bcrypt.hash(password, salt);
        const newUser = new User({
            firstName,
            lastName,
            email,
            password: hash
        });
        await newUser.save();
        res.status(201).json(newUser);
    } catch (error) {
        res.status(500).json({errors: error});
    }
};

// Login Controller
exports.signIn = async (req, res) => {
const {email , password} = req.body;
try {
    const searchOne = await User.findOne({email});
    if(!searchOne)
    return res.status(400).json({msg: 'email does not exist'});
    const matched = await bcrypt.compare(password, searchOne.password);
    if(!matched)
    return res.status(400).json({msg: 'Bad request'});
    const payload = {
        id: searchOne._id,
        firstName: searchOne.firstName,
        lastName: searchOne.lastName,
        email: searchOne.email,
    };
    const token = await jwt.sign(payload, secretOrKey);
    return res.status(200).json({token: `Bearer ${token}`});
} catch (error) {
        res.status(500).json({errors: error});
}
};