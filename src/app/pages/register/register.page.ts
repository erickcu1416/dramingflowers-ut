import { MessagesController } from './../../controllers/messages.controller';
import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  nombreUsuario = '';
  usuario = '';
  paswword = '';

  constructor(private _authSerivice: AuthService, private messagesCtrl: MessagesController) { }

  ngOnInit() {
    console.log('HOLA UT');
  }

  register() {
    console.log('el usario es', this.usuario);
    console.log('el password es', this.paswword);
    this.messagesCtrl.presentLoading('Registrando usuario...');
    this._authSerivice.registerFirebase(this.usuario, this.paswword);
  }

}
