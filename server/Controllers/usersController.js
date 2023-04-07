const users = require("../models/userSchema.js");
const moment = require("moment")

exports.userpost = async (req, res) => {
    const file = req.file.filename;
    // console.log(file);  
    const { fname, lname, email, mobile, gender, location, status } = req.body;

    if (!fname || !lname || !email || !mobile || !gender || !location || !status || !file) {
        res.status(401).json("All Inputs is required")
    }
    try {
        const preUser = await users.findOne({
            email:email
        });
        if(preUser){
            res.status(401).json("This user already exist");
        }else{
            const detected = moment( new Date()).format("YYY-MM-DD hh:mm:ss");
            const userData = new users({
                fname, lname, email, mobile, gender, location, status, profile: file, detected
            });
            // console.log(userData);
            await userData.save();
            res.status(200).json(userData);
        }
    }catch(error){
        res.status(401).json(error);
        console.log(error);
        console.log("catch block error");
    }
}

//userget
exports.userGet = async (req, res) => {
    try{
        const userdata = await users.find();
        res.status(200).json(userdata);
    }catch(error){
        console.log(error);
        console.log("getuser error");
    }
};

exports.getSingleUser = async (req, res) => {
    const {id: userId} = req.params;
    try {
        const userData = await users.findOne({_id:userId});
        res.status(200).json(userData);
    } catch (error) {
        res.status(500).json(error);
    }
}

exports.updateUser = async (req, res) => {
    const {id: userId} = req.params;
    const {fname, lname, email, mobile, gender, location, status, user_profile} = req.body;
        const file = req.file ? req.file.filename : user_profile;
        const dateUpdate = moment(new Date()).format("YYY-MM-DD hh:mm:ss");
    try {
        const updatedUser = await users.findByIdAndUpdate({
            fname, lname, email, mobile, gender, location, status, profile: file, dateUpdate
        },{
            new:true
        });

        await updatedUser.save();
        res.status(200).json(updatedUser);

    } catch (error) {
        res.status(500).json(error);
    }
}