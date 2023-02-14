const users = require("../modules/userSchema")

exports.userpost = async(req,res) => {
    console.log(req.file);
    console.log(req.body)
}