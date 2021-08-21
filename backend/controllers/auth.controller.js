const User = require('../models/User');
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
    try {
        let connectedUser = await authService.signIn(req.body)
        res.status(200).json({ connectedUser: connectedUser })
    } catch (error) {
        res.status(500).json({ errors: error });
    }
};