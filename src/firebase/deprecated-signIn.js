import auth from './auth';

auth.onAuthStateChanged(function(user) {
	if (user) {

	} else {

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
