import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AlertController } from '@ionic/angular';
import { AgendamentoPageRoutingModule } from '../agendamento/agendamento-routing.module';
import { Router } from '@angular/router';
import { UsuarioService } from '../services/usuario.service';


@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
})
export class FolderPage implements OnInit {

  public folder: string;

  public formLogin: FormGroup;

  public mensagens_validacao = {

    email: [
      { tipo: 'required', mensagem: 'O campo email é obrigatório.' },
      { tipo: 'email', mensagem: 'E-mail inválido.' },
    ],
    senha: [
      { tipo: 'required', mensagem: 'É obrigatório digitar a senha.' },
      { tipo: 'minLength', mensagem: 'A senha deve ter pelo menos 6 caracteres' },
      { tipo: 'maxLength', mensagem: 'A senha deve ter no maximo 8 caracteres' }
    ]
  };


  constructor(
    private activatedRoute: ActivatedRoute,
    public formBuilder: FormBuilder,
    public alertController: AlertController,
    public router: Router,
    public usuarioService: UsuarioService


  ) {

    this.formLogin = formBuilder.group({

      email: ['', Validators.compose([Validators.email, Validators.required])],
      senha: ['', Validators.compose([Validators.minLength(6), Validators.maxLength(8), Validators.required])]
    });

  }

  public async login() {
    if (this.formLogin.valid) {

      let email = this.formLogin.value.email;
      let senha = this.formLogin.value.senha;

      if (await this.usuarioService.login(email, senha)) {
        this.router.navigateByUrl('inicio');
      } else {
        this.alertUserInvalid();
      }

      if (email == "admin@admin.com" && senha == "123456") {
        this.router.navigateByUrl('adm-agendamentos');
      } else {
      }

    } else {
      this.alertFormInvalid();
    }

  }


  async alertFormInvalid() {
    const alert = await this.alertController.create({
      header: 'ERRO!',
      message: 'Formulário inválido, confira os dados!',
      buttons: ['OK']

    });
    await alert.present();
  }

  async alertUserInvalid() {
    const alert = await this.alertController.create({
      header: 'ERRO!',
      message: 'E-mail/senha inválidos, confira os dados!',
      buttons: ['OK']

    });
    await alert.present();
  }

  ngOnInit() {
    this.folder = this.activatedRoute.snapshot.paramMap.get('id');
  }

}
