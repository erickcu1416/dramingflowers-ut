import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private auth: AngularFireAuth) { }

  registerFirebase(email, password) {
    this.auth.auth.createUserWithEmailAndPassword(email, password).then(
      () => {
        console.log('Usuario registrado');
      }
    );
  }

}
