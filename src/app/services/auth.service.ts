import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase } from 'angularfire2/database';
import * as firebase from 'firebase/app';
import { Observable } from 'rxjs';
import { User } from '../models/user.model';


@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private user: Observable<firebase.User>;
  private authState: any;

  constructor(private afAuth: AngularFireAuth,
    private db: AngularFireDatabase,
    private router: Router) {
    this.user = afAuth.authState;
  }

  authUser() {
    return this.user;
  }


  login(email: string, password: string) {
    return this.afAuth.auth.signInWithEmailAndPassword(email, password)
      .then((user) => {
        this.authState = user;
        this.setUserStatus('online');
        this.router.navigate(['chat']);
      });
  }

  logout() {
    this.afAuth.auth.signOut();
    this.router.navigate(['login']);
  }

  signUp(email: string, password: string, displayName: string) {
    return this.afAuth.auth.createUserWithEmailAndPassword(email, password)
      .then((user) => {
        this.authState = user;
        const status = 'online';
        this.setUserData(email, displayName, status);
      }).catch(error => console.log(error));
  }

  setUserData(email: string, displayName: string, status: string): void {
    var uuid = firebase.auth().currentUser.uid;
    console.log("uuid", uuid);
    firebase.database().ref().child('users').child(uuid).set({
      email: email,
      displayName: displayName,
      status: status
    })
    
  }

  setUserStatus(status: string): void {
    var uuid = firebase.auth().currentUser.uid;
    console.log("uuid", uuid);
    firebase.database().ref().child('users').child(uuid).set({
      status: status
    })

  }
}
