import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Usuario } from '../intefaces/usuario';

@Component({
  selector: 'app-recup-senha',
  templateUrl: './recup-senha.page.html',
  styleUrls: ['./recup-senha.page.scss'],
})
export class RecupSenhaPage implements OnInit {

  public user: Usuario = {} ;

  constructor(
    public authService: AuthService,
    public router: Router,
    public alertCrl: AlertController,
    ) { }

    async resetSenha(){

      await this.authService.resetSenha(this.user).
      then(
        async () =>{
          const alert = await this.alertCrl.create({
            message:'Verifique seu e-mail !!',
            buttons:[{text:'ok', handler:()=>{
              this.router.navigateByUrl('folder/folder');
            },},],
          });
          await alert.present();
        })
    }

  ngOnInit() {
  }

}
