import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AlertController, LoadingController, ToastController } from '@ionic/angular';
import { Router } from '@angular/router';
import { Usuario } from '../intefaces/usuario';
import { AuthService } from '../services/auth.service';


@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
})
export class FolderPage implements OnInit {

  public folder: string;

  public userLogin: Usuario = {};

  public loading: any;

  constructor(
    private activatedRoute: ActivatedRoute,
    public formBuilder: FormBuilder,
    public alertController: AlertController,
    public router: Router,
    private loadingCtrl: LoadingController,
    private toastCtrl: ToastController,
    private authService: AuthService

  ) { }

  ngOnInit() {
    this.folder = this.activatedRoute.snapshot.paramMap.get('id');
  }

  async login() {

    await this.presentLoading();



    try {
      if (this.userLogin.email == "adm@val.com") {
        await this.authService.login(this.userLogin);
        this.router.navigate(['adm-agendamentos']);
      } else {
        await this.authService.login(this.userLogin);
        this.router.navigate(['inicio']);
      }
    } catch (error) {

      let message: string;

      switch (error.code) {
        case 'auth/user-not-found':
          message = "E-mail não existe !!";
          break;

        case 'auth/wrong-password':
          message = "Senha incorreta!!";
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
}

