import { Component, OnInit } from '@angular/core';

import { Agendamento } from '../models/agendamento';
import { AgendamentosService } from '../services/agendamentos.service';

import { AlertController, LoadingController, ToastController } from '@ionic/angular';

import { Router } from '@angular/router';


@Component({
  selector: 'app-agendamento',
  templateUrl: './agendamento.page.html',
  styleUrls: ['./agendamento.page.scss'],
})
export class AgendamentoPage implements OnInit {


  public agenda: Agendamento = {};
  loading: any;

  constructor(private agendamentoservice: AgendamentosService,
    public alertCtrl: AlertController,
    public loadingCtrl: LoadingController,
    public toastCtrl: ToastController,
    public router: Router) { }


  public async agendar() {
    const agendamento = new Agendamento();
    agendamento.nome = this.agenda.nome;
    agendamento.data = this.agenda.data;
    agendamento.hora = this.agenda.hora;
    agendamento.profissional = this.agenda.profissional;
    agendamento.tipoCorte = this.agenda.tipoCorte;

    await this.presentLoading();
     try {
      await this.agendamentoservice.create(this.agenda).then(
        async () => {
          const alert = await this.alertCtrl.create({
            message: 'Agendamento realiazado com sucesso !!',
            buttons: [{
              text: 'ok', handler: () => {
                this.router.navigateByUrl('inicio');
              },
            },],
          });
          await alert.present();
        })
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
  ngOnInit() {
  }

}
