import config from '../config/firebaseConfig';
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

firebase.initializeApp(config);

export default firebase;
