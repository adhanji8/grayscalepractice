const path = require("path");
/*
 * Project: Milestone 1
 * File Name: main.js
 * Description:
 *
 * Created Date:
 * Author:
 *
 */

const IOhandler = require("./IOhandler");
const zipFilePath = path.join(__dirname, "myfile.zip");
const pathUnzipped = path.join(__dirname, "unzipped");
const pathProcessed = path.join(__dirname, "grayscaled");
const unzipper = require("unzipper");
const fs = require("fs");
const PNG = require("pngjs").PNG;

// Step 1: Read the zip file
// Step 2: Unzip the zip file
// Step 3: Read all png images from unzipped folder
// Step 4: Send them to the grayscale filter function
// Step 5: After ALL IMAGES have SUCCESSFULLY been
// grayscaled, show a success message.
// ALL ERRORS MUST SHOW IN .catch in PROMISE CHAIN
