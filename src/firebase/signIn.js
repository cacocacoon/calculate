import auth from './auth';

let signedIn = false;
//
auth.onAuthStateChanged(function(user) {
	if (user) {
		signedIn = true;
	}
	// else {
	// 	const email = 'cacocacoon@gmail.com';
	// 	const password = '363e70a2B3';
	// 	auth.signInWithEmailAndPassword(email, password)
	// 	.then((user) => {
	// 		console.log(user);
	// 	})
	// 	.catch(e => {
	// 		console.log(e.message);
	// 	});
	// }
});

export default signedIn;
