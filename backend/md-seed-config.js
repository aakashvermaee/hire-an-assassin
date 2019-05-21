require('dotenv').config();

var mongooseLib = require('mongoose');

mongooseLib.Promise = global.Promise || Promise;

const MONGO_URL = process.env.MONGO_URL + process.env.MONGO_DB;

module.exports = {
	// Export the mongoose lib
	mongoose: mongooseLib,

	// Export the mongodb url
  mongoURL: MONGO_URL,

	/*
    Seeders List
    ------
    order is important
  */
	seedersList: {}
};
