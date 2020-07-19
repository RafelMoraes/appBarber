import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { AlertController, LoadingController, ToastController } from '@ionic/angular';
import { Usuario } from '../intefaces/usuario';

@Component({
  selector: 'app-recup-senha',
  templateUrl: './recup-senha.page.html',
  styleUrls: ['./recup-senha.page.scss'],
})
export class RecupSenhaPage implements OnInit {

  public user: Usuario = {};
  loading: any;


  constructor(
    public authService: AuthService,
    public router: Router,
    public alertCrl: AlertController,
    public loadingCtrl: LoadingController,
    public toastCtrl: ToastController
  ) { }

  async resetSenha() {
    try {
      await this.authService.resetSenha(this.user).
        then(
          async () => {
            const alert = await this.alertCrl.create({
              message: 'Verifique seu e-mail !!',
              buttons: [{
                text: 'ok', handler: () => {
                  this.router.navigateByUrl('folder/folder');
                },
              },],
            });
            await alert.present();
          })
    } catch (error) {

      let message: string;

      switch (error.code) {
        case 'auth/invalid-email':
          message = "E-mail inválido !!";
          break;

        case 'auth/user-not-found':
          message = "E-mail não encontrado!!";
          break;
      }
      this.presentToast(message);

    } finally {
      this.loading.dismiss();
    }

  }

  async presentLoading() {
    this.loading = await this.loadingCtrl.create({
      message: 'Por favor, aguarde...'
    });
    return this.loading.present();
  }

  async presentToast(message: string) {
    const toast = await this.toastCtrl.create({
      message,
      duration: 2000
    });
    toast.present();
  }

  ngOnInit() {
  }

}
