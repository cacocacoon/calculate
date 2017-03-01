import config from '../config/firebaseConfig';
import firebase from 'firebase';

firebase.initializeApp(config);

export default firebase;
