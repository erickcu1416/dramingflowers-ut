import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  nombreUsuario = '';
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
