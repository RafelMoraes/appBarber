import { Component, OnInit } from '@angular/core';

// Importações necessárias para formulários
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

// Compara duas strings e retorna se são iguais.
import { ComparaValidator } from '../validators/compara-validator';

import { AlertController, LoadingController, ToastController } from '@ionic/angular';
import { Router } from '@angular/router';

import { Usuario } from '../intefaces/usuario';
import { AuthService } from '../services/auth.service';
import { AngularFirestore } from '@angular/fire/firestore';

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
    public alertCtrl: AlertController,
    public router: Router,
    private loadingCtrl: LoadingController,
    private toastCtrl: ToastController,
    private authService: AuthService,
    public afs: AngularFirestore
  ) {
  }

  ngOnInit() {
  }

  async cadastro() {
    await this.presentLoading();
    try {
     const newUser = await this.authService.cadastro(this.userCadastro)
     const newUserObject = Object.assign({}, this.userCadastro);

     delete newUserObject.senha;
     await this.afs.collection('Usuarios').doc(newUser.user.uid).set(newUserObject).then(
        async () => {
          const alert = await this.alertCtrl.create({
            message: 'Cadastro realizado com sucesso !!',
            buttons: [{
              text: 'ok', handler: () => {
                this.router.navigateByUrl('folder/folder');
              },
            },],
          });
          await alert.present();
        })
    } catch (error) {

      console.error(error);

      let message: string;

      switch (error.code) {
        case 'auth/email-already-in-use':
          message = "E-mail em uso !!";
          break;

        case 'auth/invalid-email':
          message = "E-mail inválido!!";
          break;

          case 'auth/argument-error':
          message = "Preencha todos os campos!!";
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