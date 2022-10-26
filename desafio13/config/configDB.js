const {
  MONGO_URI: MONGO_URI,
  FIREBASE_TYPE: FIREBASE_TYPE,
  FIREBASE_TOKEN_URI: FIREBASE_TOKEN_URI,
  FIREBASE_PROJECT_ID: FIREBASE_PROJECT_ID,
  FIREBASE_PRIVATE_KEY_ID: FIREBASE_PRIVATE_KEY_ID,
  FIREBASE_PRIVATE_KEY: FIREBASE_PRIVATE_KEY,
  FIREBASE_CLIENT_ID: FIREBASE_CLIENT_ID,
  FIREBASE_CLIENT_EMAIL: FIREBASE_CLIENT_EMAIL,
  FIREBASE_AUTH_URI: FIREBASE_AUTH_URI,
  FIREBASE_AUTH_PROVIDER_X509_CERT_URL: FIREBASE_AUTH_PROVIDER_X509_CERT_URL,
  FIREBASE_CLIENT_X509_CERT_URL: FIREBASE_CLIENT_X509_CERT_URL
} = require('../config.js');

//Base de datos (mongoDB-mongoose)

const {
  connect: connect
} = require('mongoose');
module.exports.url = MONGO_URI;
module.exports.connectMG = async function connectMG() {
  try {
    return await connect(url, {
      useNewUrlParser: true,
    });
  } catch (e) {
    throw Error(e);
  }
};

//Base de datos (Firebase)

const admin = require("firebase-admin");

const firebaseConfig = {
  type: FIREBASE_TYPE,
  project_id: FIREBASE_PROJECT_ID,
  private_key_id: FIREBASE_PRIVATE_KEY_ID,
  private_key: FIREBASE_PRIVATE_KEY,
  client_email: FIREBASE_CLIENT_EMAIL,
  client_id: FIREBASE_CLIENT_ID,
  auth_uri: FIREBASE_AUTH_URI,
  token_uri: FIREBASE_TOKEN_URI,
  auth_provider_x509_cert_url: FIREBASE_AUTH_PROVIDER_X509_CERT_URL,
  client_x509_cert_url: FIREBASE_CLIENT_X509_CERT_URL,
};

admin.initializeApp({
  credential: admin.credential.cert(firebaseConfig),
  databaseURL: 'https://ecommerce-4b8f5.firebaseio.com'
});

module.exports.dbFirebase = admin.firestore();

module.exports.firebaseConfig = firebaseConfig;
