import { MessagesController } from './../../controllers/messages.controller';
import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  nombreUsuario = '';
  usuario = '';
  paswword = '';

  constructor(private _authSerivice: AuthService,
              private messagesCtrl: MessagesController,
              private router: Router) { }

  ngOnInit() {
    console.log('HOLA UT');
  }

  register() {
    console.log('el usario es', this.usuario);
    console.log('el password es', this.paswword);

    if (!this.usuario || !this.paswword) {
      this.messagesCtrl.presentAlert('Alerta', 'Necesitas llenar todos los campos');
      return;
    }

    this.messagesCtrl.presentLoading('Registrando usuario...');
    this._authSerivice.registerFirebase(this.usuario, this.paswword).then(
      async () => {
        await this.messagesCtrl.hideLoading();
        this.router.navigateByUrl('inicio');
      }
    ).catch(
      (err) => {
        this.messagesCtrl.hideLoading();
        this.messagesCtrl.presentAlert('Error', 'Ocurrió un error al registrarse');
      }
    );
  }

}
