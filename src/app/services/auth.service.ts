import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private auth: AngularFireAuth) { }

  registerFirebase(email, password) {
    return new Promise((resolve, reject) => {
      this.auth.auth.createUserWithEmailAndPassword(email, password).then(
        () => {
          console.log('Usuario registrado');
          return resolve(true);
        }
      ).catch(
        () => {
          return reject(false);
        }
      );
    });
  }

}
