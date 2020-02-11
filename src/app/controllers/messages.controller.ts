import { Injectable } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class MessagesController {

  loading: any;

  constructor(public loadingController: LoadingController,
              public alertController: AlertController) {}

  async presentAlert(header, message) {
    const alert = await this.alertController.create({
      header,
      message,
      buttons: ['OK']
    });

    await alert.present();
  }

  async presentLoading(message) {
    this.loading = await this.loadingController.create({
      message,
    }).then((res) => {
      res.present();
    });
  }

  hideLoading() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        this.loadingController.dismiss();
        resolve(true);
      }, 500);
    });
  }

}
