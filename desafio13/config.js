'use strict';
const dotenv = require("dotenv");
dotenv.config()

module.exports.TWITTER_CONSUMER_KEY = process.env.TWITTER_CONSUMER_KEY;
module.exports.TWITTER_CONSUMER_SECRET = process.env.TWITTER_CONSUMER_SECRET;
module.exports.MONGO_URI = process.env.MONGO_URI;
module.exports.FIREBASE_TYPE = process.env.FIREBASE_TYPE;
module.exports.FIREBASE_PROJECT_ID = process.env.FIREBASE_PROJECT_ID;
module.exports.FIREBASE_PRIVATE_KEY_ID = process.env.FIREBASE_PRIVATE_KEY_ID;
module.exports.FIREBASE_PRIVATE_KEY = process.env.FIREBASE_PRIVATE_KEY;
module.exports.FIREBASE_CLIENT_EMAIL = process.env.FIREBASE_CLIENT_EMAIL;
module.exports.FIREBASE_CLIENT_ID = process.env.FIREBASE_CLIENT_ID;
module.exports.FIREBASE_AUTH_URI = process.env.FIREBASE_AUTH_URI;
module.exports.FIREBASE_TOKEN_URI = process.env.FIREBASE_TOKEN_URI;
module.exports.FIREBASE_AUTH_PROVIDER_X509_CERT_URL = process.env.FIREBASE_AUTH_PROVIDER_X509_CERT_URL;
module.exports.FIREBASE_CLIENT_X509_CERT_URL = process.env.FIREBASE_CLIENT_X509_CERT_URL;