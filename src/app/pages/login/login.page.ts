import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  usuario = '';
  paswword = '';

  constructor(private _authServce: AuthService) { }

  ngOnInit() {
    console.log('HOLA UT');
  }

  login() {
    console.log('el usario es', this.usuario);
    console.log('el password es', this.paswword);
  }
}
