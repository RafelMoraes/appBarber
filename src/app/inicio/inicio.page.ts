import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  constructor(
    private authService: AuthService,
    public afa: AngularFireAuth
  ) { }

  ngOnInit() {
  }

  public logout() {
    return this.afa.signOut();
  }


}
