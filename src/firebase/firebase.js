import config from '../constants/firebase/config';
import firebase from 'firebase';

firebase.initializeApp(config);

export default firebase;
