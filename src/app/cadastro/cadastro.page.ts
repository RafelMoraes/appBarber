import { Component, OnInit } from '@angular/core';

// Importações necessárias para formulários
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

// Compara duas strings e retorna se são iguais.
import { ComparaValidator } from '../validators/compara-validator';

import { AlertController, LoadingController, ToastController } from '@ionic/angular';
import { Router } from '@angular/router';

import { Usuario } from '../intefaces/usuario';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.page.html',
  styleUrls: ['./cadastro.page.scss'],
})
export class CadastroPage implements OnInit {


  public userCadastro: Usuario = {};

  public loading: any;


  constructor(
    public formBuilder: FormBuilder,
    public alertController: AlertController,
    public router: Router,
    private loadingCtrl: LoadingController,
    private toastCtrl: ToastController,
    private authService: AuthService
  ) {
  }

  ngOnInit() {
  }

  async cadastro() {
    await this.presentLoading();



    try {
      await this.authService.cadastro(this.userCadastro);
    } catch (error) {

      let message: string;

      switch (error.code) {
        case 'auth/email-already-in-use':
          message = "E-mail em uso !!";
          break;

        case 'auth/invalid-email':
          message = "E-mail inválido!!";
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