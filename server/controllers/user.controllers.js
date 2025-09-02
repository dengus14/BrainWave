const User = require('../models/User')

const listUsers = async (req,res) => {
    try {
        const allUsers = await User.find()
        res.status(200).json(allUsers)
    }catch (error) {
        res.status(500).json({message:"Error getting users", error})
    }
}