import { Injectable } from '@angular/core';
import { LoadingController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class MessagesController {

  loading: any;

  constructor(public loadingController: LoadingController) {}

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
        this.loading.dismiss();
        resolve(true);
      }, 500);
    });
  }

}
