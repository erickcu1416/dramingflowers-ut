import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  email = '';
  constructor(private auth: AuthService) {
    this.getUsuarioFirebase();
  }

  async getUsuarioFirebase() {
    const e: any = await this.auth.getUser();
    this.email = e.email || '';
    console.log(this.email);
  }

}
