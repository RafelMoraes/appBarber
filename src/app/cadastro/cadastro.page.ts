import { Component, OnInit } from '@angular/core';

// Importações necessárias para formulários
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

// Compara duas strings e retorna se são iguais.
import { ComparaValidator } from '../validators/compara-validator';

import { Usuario } from '../models/Usuario';
import { UsuarioService } from '../services/usuario.service';

import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.page.html',
  styleUrls: ['./cadastro.page.scss'],
})
export class CadastroPage implements OnInit {

  public formCadastro: FormGroup;
  public usuario: Usuario;

  mensagens_validacao = {
    nome: [
      { tipo: 'required', mensagem: 'O campo Nome é obrigatório.' },
      { tipo: 'minlength', mensagem: 'O nome deve ter pelo menos 3 caracteres.' },
    ],
    telefone: [
      { tipo: 'required', mensagem: 'O campo telefone é obrigatório.' },
    ],
    endereco: [
      { tipo: 'required', mensagem: 'O campo endereço é obrigatório.' },
    ],
    bairro: [
      { tipo: 'required', mensagem: 'O campo bairro é obrigatório.' },
    ],
    cidade: [
      { tipo: 'required', mensagem: 'O campo cidade é obrigatório.' },
    ],
    email: [
      { tipo: 'required', mensagem: 'O campo E-mail é obrigatório.' },
      { tipo: 'email', mensagem: 'E-mail Inválido.' },
    ],
    senha: [
      { tipo: 'required', mensagem: 'É obrigatório confirmar senha.' },
      { tipo: 'minlength', mensagem: 'A senha deve ter pelo menos 6 caracteres.' },
      { tipo: 'maxlength', mensagem: 'A senha deve ter no máximo 8 caractéres.' }
    ],
    confirmaSenha: [
      { tipo: 'required', mensagem: 'É obrigatório confirmar senha.' },
      { tipo: 'minlength', mensagem: 'A senha deve ter pelo menos 6 caracteres.' },
      { tipo: 'maxlength', mensagem: 'A senha deve ter no máximo 8 caractéres.' },
      { tipo: 'comparacao', mensagem: 'Deve ser igual a senha.' }
    ]
  };

  constructor(
    public formBuilder: FormBuilder,
    public usuarioService: UsuarioService,
    public alertController: AlertController,
    public router: Router) {

    // Monta o formulário
    this.formCadastro = formBuilder.group({
      // Declara os campos do formulário.
      nome: ['', Validators.compose([Validators.required, Validators.minLength(3)])],
      telefone: ['', Validators.compose([Validators.required,])],
      endereco: ['', Validators.compose([Validators.required])],
      bairro: ['', Validators.compose([Validators.required])],
      cidade: ['', Validators.compose([Validators.required])],
      email: ['', Validators.compose([Validators.required, Validators.email])],
      senha: ['', Validators.compose([Validators.minLength(6), Validators.maxLength(8), Validators.required])],
      confirmaSenha: ['', Validators.compose([Validators.minLength(6), Validators.maxLength(8), Validators.required])]
    }, {
      validator: ComparaValidator('senha', 'confirmaSenha')
    });

  }

  ngOnInit() {
  }

  public async salvarUsuario() {
    if (this.formCadastro.valid) {
      this.usuario = this.formCadastro.value as Usuario;
      delete this.usuario['confirmaSenha'];

      if (await this.usuarioService.salvar(this.usuario)) {
        this.alertCadastro('SUCESSO!!!', 'Usuário salvo com sucesso!!!');
        this.router.navigateByUrl('/folder/folder');
      } else {
        this.alertCadastro('ERRO!!!', 'Erro ao salvar o usuário!!!');
      }
    } else {
      this.alertCadastro('ERRO!!!', 'Formulário inválido, confira os dados');
    }
  }

  async alertCadastro(titulo, msg) {
    const alert = await this.alertController.create({
      header: titulo,
      message: msg,
      buttons: ['OK']
    });

    await alert.present();
  }

}