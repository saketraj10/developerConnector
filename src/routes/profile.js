const express = require("express");
const profileRouter = express.Router();
const {userAuth} = require("../middlewares/auth");
const {validateProfileEditData, validateForgotPassword} = require("../utils/validation");
const bcrypt = require("bcrypt");

profileRouter.get("/profile/view", userAuth, async (req, res) => {
  try {
    const user = req.user;

    res.send(user);
  } catch (err) {
    res.status(400).send("ERROR: " + err.message);
  }
});

profileRouter.patch("/profile/edit", userAuth, async (req, res) => {
  try{
    if(!validateProfileEditData(req)){
      throw new Error("Invalid Edit Request");
    }

    const loggedInUser = req.user;
    console.log(loggedInUser);

    Object.keys(req.body).forEach(key => (loggedInUser[key] = req.body[key]));

    await loggedInUser.save();
    
    res.json({
      message: `${loggedInUser.firstName}, your profile updated successfully`,
      data: loggedInUser,
    });

  } catch(err){
    res.status(400).send("ERROR: " + err.message);
  }
});

profileRouter.patch("/profile/passwordUpdate", userAuth, async (req, res) => {
  try{
    if(!validateForgotPassword(req)){
      throw new Error("Invalid Update Request");
    }
    const loggedInUser = req.user;

    const { oldPassword, newPassword } = req.body;

    const isPassword = await loggedInUser.validatePassword(oldPassword);
    if(!isPassword){
      throw new Error("Invalid old password!");
    }

    const passwordHash = await bcrypt.hash(newPassword, 10);

    loggedInUser.password = passwordHash;
    await loggedInUser.save();

    res.send(`${loggedInUser.firstName}, your password is updated`);

  } catch(err){
    res.status(400).send("ERROR: " + err.message);
  }
});



module.exports = profileRouter;