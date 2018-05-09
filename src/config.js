// Firebase config
export const firebase = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET
};

export const firestore = {
  timestampsInSnapshots: true
};

export const rrFirebase = {
  userProfile: 'users',
  //presence: 'presence',
  firebaseStateName: 'firebase',
  useFirestoreForProfile: true,
  enableLogging: false
  // updateProfileOnLogin: false, // enable/disable updating of profile on login
  // profileParamsToPopulate: [{ child: 'cars', root: 'cars' }] // gather data for populating profile params
  // profileDecorator: (userData) => ({ email: userData.email }) // customize format of user profile
};

export default { firebase, firestore, rrFirebase };
