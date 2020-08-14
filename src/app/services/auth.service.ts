import { Injectable } from '@angular/core';
import * as firebase from 'firebase';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor() {}

  createUserWithEmailAndPassword(
    email: string,
    password: string,
    firstName: string,
    lastName: string
  ) {
    return new Promise((resovle, reject) => {
      firebase
        .auth()
        .createUserWithEmailAndPassword(email, password)
        .then(
          () => {
            resovle();
            this.updateUserProfile(firstName, lastName);
          },
          (error) => {
            reject(error);
          }
        );
    });
  }

  // https://firebase.google.com/docs/auth/web/manage-users#update_a_users_profile
  updateUserProfile(firstName, lastName) {
    const user = firebase.auth().currentUser;
    console.log('firstName', firstName);
    console.log(user);
    user
      .updateProfile({
        displayName: 'First name : ' + firstName + ' LastName : ' + lastName,
      })
      .then(function () {
        console.log('ok');
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  signInWithEmailAndPassword(email: string, password: string) {
    return new Promise((resolve, reject) => {
      firebase
        .auth()
        .signInWithEmailAndPassword(email, password)
        .then(
          () => {
            resolve();
          },
          (error) => {
            reject(error);
          }
        );
    });
  }

  signOutUser() {
    firebase
      .auth()
      .signOut()
      .then(function () {
        // Sign-out successful.
      })
      .catch(function (error) {
        // An error happened.
        console.warn(error);
      });
  }
}
