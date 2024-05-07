const createHttpError = require("http-errors");
const nodemailer = require("nodemailer");
const mongoose = require("mongoose");
require("dotenv").config();
const User = require("../model/user");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const path = require("path");
const fs = require("fs");

const { google } = require("googleapis");
const { version } = require("os");

const {
  uploadImageToDrive,
  deleteFile,
} = require("./service/fileUploadContrller");


const emailSend = require("./service/sendEmail");
const { config } = require("dotenv");



exports.login = async (req, res, next) => {
  const email = req.body.email;
  const password = req.body.password;
  const role = req.body.role
  try {
    if (!email || !password) {
      throw createHttpError(400, "missing email or password");
    }
    try {
      var user = await User.findByCredentials(
        req.body.email,
        req.body.password
      );
    } catch (error) {
      throw createHttpError(400, "user not found ");
    }
 

    const token = await user.generateAuthToken();

    res.send({ user, token });
  } catch (error) {
    next(error);
  }
};

exports.forgotPassword = async (req, res, next) => {
  const email = req.body.email;
  if (!email) {
    throw createHttpError(400, "missing email address");
  }


  try {
    const user = await User.findOne({ email: email }); 
    var userId = user._id;
    var username = user.firstName
    ;
    if (!user) {
      throw createHttpError(400, "missing user ");
    }
    // define requres massage cotext for email
    const token = await user.generateAuthToken();
    const subject = "Octo Care sale System Reset password"
    const text = ` 
    Deare ${username}
    you can reset your Octo care sale user account  password 
    Please click on the below link to reset your password
    http://localhost:3000/ResetPassword/${userId}/${token}
    
    do not shear this link 
    
    thak you 
    Octo care sale `

     // call send email funtion to send email
     emailSend(email,subject,text); 


    res.send({ token, userId });
  } catch (error) {
    next(error);
  }
};

exports.resetPassword = async (req, res, next) => {
  const { id, token } = req.params;
  const newPassword = req.body.password;

  const SECRET_KEY = process.env.SECRET_KEY;

  const verify = jwt.verify(token, SECRET_KEY);

  if (verify) {
    hasspasword = await bcrypt.hash(newPassword, 12);

    const user = await User.findByIdAndUpdate(
      { _id: id },
      { password: hasspasword }
    );

    console.log(user);
    res.send("success");
  }
};

//Crete new user  Controller function
exports.adminRegistration = async (req, res, next) => {
  const { firstName, email, password,lastName, } = req.body;
  const role = "Admin"
  try {
    if (!firstName || !email || !password) {
      throw createHttpError(400, "please provide all required information");
    }
    const { profile } = req.files;// load the image from req.files

    // call the uploadImageToDrive function for uploading image to google drive
    const { filepath } = await uploadImageToDrive(profile);

    
    // set profile Url  path to store in data base
    // create new user
    const user = new User({
      firstName,
      email,
      password,
      lastName,
      profile: filepath,
      role:role
      
    });

    const result = await user.save();
    res.status(201).send(result);
  } catch (error) {
    next(error);
  }
};



exports.customerRegistration = async (req, res, next) => {
  const { firstName, email, password,lastName } = req.body;
  const role = "Customer"

  
  try {
    if (!firstName || !email || !password) {
      throw createHttpError(400, "please provide all required information");
    }
    const { profile } = req.files;// load the image from req.files

    // call the uploadImageToDrive function for uploading image to google drive
    const { filepath } = await uploadImageToDrive(profile);

    
    // set profile Url  path to store in data base
    // create new user
    const user = new User({
      firstName,
      email,
      password,
      lastName,
      profile: filepath,
      role:role
      
    });

    const result = await user.save();
    res.status(201).send(result);
  } catch (error) {
    next(error);
  }
};
