const express = require("express");
const router = new express.Router();
const controllers = require("../Controllers/usersController");
const upload = require("../multerconfig/storageConfig")

router.post('/user/register',upload.single("user_profile"),controllers.userpost);
router.get('/user/details',controllers.userGet);

module.exports = router