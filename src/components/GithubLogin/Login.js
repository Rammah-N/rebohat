/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import axios from "axios";
import Button from "../Button/Button";
const firebaseConfig = {
	apiKey: "AIzaSyBFqU-ripuP7NVuypz9xFwibpVldcfeht4",
	authDomain: "rebohat-8e714.firebaseapp.com",
	projectId: "rebohat-8e714",
	storageBucket: "rebohat-8e714.appspot.com",
	messagingSenderId: "453858342124",
	appId: "1:453858342124:web:826d4f8f2e1ca6783c61c9",
};
if (!firebase.apps.length) {
	firebase.initializeApp(firebaseConfig);
} else {
	firebase.app(); // if already initialized, use that one
}
const db = firebase.firestore();
const provider = new firebase.auth.GithubAuthProvider();
provider.addScope("public_repo");
// Event fired when clicking login button

const Login = (props) => {
	const [authComponent, setAuthComponent] = useState("");
	function toggleSignIn() {
		if (!firebase.auth().currentUser) {
			var provider = new firebase.auth.GithubAuthProvider();
			firebase.auth().signInWithRedirect(provider);
			provider.addScope("public_repo");
		} else {
			firebase.auth().signOut();
		}
	}
	// Init function to handle adding the event listeners and fetching data when user auth state changes
	function initApp() {
		// Result from Redirect auth flow.
		firebase
			.auth()
			.getRedirectResult()
			.then(function (result) {
				// The signed-in user info.
				const user = result.user;
				if (result.additionalUserInfo) {
					const repos = axios
						.get(result.additionalUserInfo.profile.repos_url)
						.then((response) => {
							const name = response.data[0].owner.login;
							const ownerRepos = response.data
								.filter((repo) => !repo.fork)
								.map((repo) => ({
									title: repo.name,
									description: repo.description,
									language: repo.language,
									url: repo.url,
									creator: name,
								}));
							db.collection("users")
								.doc(name)
								.set({
									name,
									ownerRepos,
								})
								.then((docRef) => {
									console.log("Document written with ID: ", docRef.id);
									console.log(docRef);
								})
								.catch((error) => {
									console.error("Error adding document: ", error);
								});
						});
				}
			})
			.catch(function (error) {
				// Handle Errors here.
				var errorCode = error.code;
				var errorMessage = error.message;
				// The email of the user's account used.
				var email = error.email;
				// The firebase.auth.AuthCredential type that was used.
				var credential = error.credential;
				if (errorCode === "auth/account-exists-with-different-credential") {
					alert(
						"You have already signed up with a different auth provider for that email."
					);
					// If you are using multiple auth providers on your app you should handle linking
					// the user's accounts here.
				} else {
					console.error(error);
				}
			});

		// Listening for auth state changes.
		firebase.auth().onAuthStateChanged(function (user) {
			if (user) {
				setAuthComponent(
					<p
						style={{
							fontSize: "2.5rem",
							padding: "10px",
							marginTop: "20px",
							color: "var(--heading)",
						}}
					>
						Your repositories were succefully added, thank you for sharing your
						projects with the developer community!
					</p>
				);
			} else {
				setAuthComponent(
					<Button
						btnStyle={{
							padding: "10px 20px",
							backgroundColor: "var(--card-bg)",
							color: "var(--background)",
							fontSize: "2rem",
							fontWeight: "700",
							zIndex: "999",
						}}
						btnText="Login With Github"
						btnClick={toggleSignIn}
					/>
				);
			}
		});
	}
	db.collection("users")
		.get()
		.then((querySnapshot) => {
			querySnapshot.forEach((doc) => {
				const data = doc.data();
			});
		});
	useEffect(() => {
		initApp();
	}, []);

	return authComponent;
};

export default Login;
