import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  usuario = '';
  paswword = '';

  constructor() { }

  ngOnInit() {
    console.log('HOLA UT');
  }

  login() {
    console.log('el usario es', this.usuario);
    console.log('el password es', this.paswword);
  }
}
