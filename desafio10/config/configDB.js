//---------------------------------------------------------------------------------------------------------
//-----------------------------Base de datos (mongoDB-mongoose)-----------------------------
//---------------------------------------------------------------------------------------------------------

import { connect } from "mongoose";
export const url =
  "mongodb+srv://Coder:F7HqDRbId1K2uHSv@cluster0.p7xqr5d.mongodb.net/test";
export async function connectMG() {
  try {
    return await connect(url, {
      useNewUrlParser: true,
    });
  } catch (e) {
    throw new Error(e);
  }
}

const dbMongo = await connectMG();
if (!dbMongo) throw "can not connect to the db";

//---------------------------------------------------------------------------------------------------------
//----------------------------------Base de datos (Firebase)---------------------------------
//---------------------------------------------------------------------------------------------------------

import admin from "firebase-admin";

export const firebaseConfig = {
  type: "service_account",
  project_id: "backend-coder-22ab3",
  private_key_id: "f10c4eac6f093beee31a088c16a6e6ba0adf946d",
  private_key: "-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQCtIF2Dqh4S3p1B\nH8+6//NrLnyWYGm1jefjo61u56QfFPHJRghnmgVR/lMOdrD1Nig4Ek8pCUkIOUCN\n5AuVXO7t+cq06Wt0TMNbsJQIY8y4LA6Jba4OX2ZxnME/xZZmsrsL6MYiYd+owweS\nFdntVPR0jrwzaUKKyTETt9xSkviirKj3AqcvevsxIOfpcLgetzwkwiM3Y3gU6AE8\nPX8s59uvDfKTuJGBa1D7FmQjcUiqwvEcUBaAXq2NMUdzrJIAkhMT3x06ZW6TGCeP\npdIlEMYyvw1S7Yl8V4PKkcj/G5Qoz/7Od0+qeS6lA8bmUlud5+0knQop31TFd9iK\n0QrVZjBNAgMBAAECggEADQBn/XYWZZjhyu0CavsDUxqN4TYy4h9a2ZnmcbSEOxBV\n2yV/BpbGzQJSRv0La5LqYNGhL8YCfdNc4XsNkqVEzUrr2fvIpdaI+lcPuvSRwIgQ\nfGon/uzTsvcQfUNPuP01tl6AGL9sbk5dQG+TKvNtG17Hy/2c8XLMFHzDl1DxyreY\nomqHbsvzmsw1PBRThbN7kutdvLhaMArHfh1/VcDkWg7IvNgP4zk4Ms2izGu2GyuM\ntozL1C894Gz9IwDP3ZpBB3JW6Mli9urdhFvpkez+GffbhAwwXnczFG3qFekdW0U/\nBYga1RINf1qHRPmmTxsL8ApMQaPvKuTQ/F/uKRUfEQKBgQDZsdrOf/u+Ce4Moy6n\nWeiR5UIMQAl5E403xSA5XJDLaMBcItbYMEOdurlg3nCTZuNqXpNm8MC9uFFivpYD\nuz+v8oFAM5Tqe8ymNzu8ikAdWWnBjPb/LouHiW0J+dHAtNedEU8SwPOEdckRh71a\nLor9HGWDGNt79puGAwHnXJUNkQKBgQDLlunGiq1XaEB+20m+yxMgjxxljg65Pzoe\n0BJkMKHasJYvEcWB2u9E4GFMc0gfNfowiSaAaUq8u2hf+yQCGPKYuGjBO0gBT9sl\nN4TqEH5YkT5vyPF10Lm9NO79KRbxQAC9qMLX+52xFMq3RI2hfrBNBAEoU331tfWy\nz7+27ldI/QKBgQCnIbf2MCYLCb6cLzAjRZCbaiKiGwvqy8rwlUQfJeT4dayxUAIY\nKj3PO8sVBtHxKN3SDVgngRDI11iMcfvkU38ayxjWPIPI3lEJD4CqSI3euoXKFjqP\nQaHX5fcz4Htb8rtSmDZYFJEhEfjTn54NPYxxtLpuwsfHTVartWVhxh+dMQKBgCWP\neyPZE+/rWPLOjEV5+9Zm8Ms/sTG2G4fxxWLcog/RwnN+qNyzQq+HYgwTvLudXsIz\nm3nXcyVswe3rTJJifed1JkZ4JGmxjPHJ02jHkDfQ3B8NiJa+4nWo3WqxeP0bXMeg\n6gmk70vrVRcIu8SOtgIPehMxjCyX3HOX5nvebxYVAoGBAKqV9u/sOP0buJkA8wCU\nNxy18+SbCPr26tht9k6DZPyMoV2u2xixqFy4YmKlu316ldrz0nDs2r0ipO+C0d6W\npbVH7WlYMzFUdoZH8ijGvx6KU9+/4Eb+vFPeweEPd6D/fJfdNt2QxknEzqB0knhB\nr5Gr3g1xRkQPBvV9qqYfhKaU\n-----END PRIVATE KEY-----\n",
  client_email: "firebase-adminsdk-4k1v9@backend-coder-22ab3.iam.gserviceaccount.com",
  client_id: "113087369531423130891",
  auth_uri: "https://accounts.google.com/o/oauth2/auth",
  token_uri: "https://oauth2.googleapis.com/token",
  auth_provider_x509_cert_url: "https://www.googleapis.com/oauth2/v1/certs",
  client_x509_cert_url: "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-4k1v9%40backend-coder-22ab3.iam.gserviceaccount.com"
};

admin.initializeApp({
  credential: admin.credential.cert(firebaseConfig),
  databaseURL: 'https://ecommerce-4b8f5.firebaseio.com'
});

export const dbFirebase = admin.firestore();
