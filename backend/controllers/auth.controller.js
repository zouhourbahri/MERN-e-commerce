const User = require('../models/User');
const userService = require("../services/authService")
const staticMessages = require("../staticMessages.json")
const config = require('config');
const secretOrKey = config.get('secretOrKey');
const authService = require("../services/authService")

// Register Controller
exports.signUp = async(req, res) => {
    try {
        const registredUser = await authService.signUp(req.body)
        res.status(201).json(registredUser);
    } catch (error) {
        res.status(500).json({ errors: error });
    }
};

// Login Controller
exports.signIn = async(req, res) => {
    const { email, password } = req.body;
    try {
        const searchOne = await User.findOne({ email });
        if (!searchOne)
            return res.status(400).json({ msg: 'email does not exist' });
        const matched = await bcrypt.compare(password, searchOne.password);
        if (!matched)
            return res.status(400).json({ msg: 'Bad request' });
        const payload = {
            id: searchOne._id,
            firstName: searchOne.firstName,
            lastName: searchOne.lastName,
            email: searchOne.email,
        };
        const token = await jwt.sign(payload, secretOrKey);
        return res.status(200).json({ token: `Bearer ${token}` });
    } catch (error) {
        res.status(500).json({ errors: error });
    }
};