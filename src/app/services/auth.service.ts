import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Usuario } from '../intefaces/usuario';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(public afa: AngularFireAuth) { }

  login(user: Usuario) {
    return this.afa.signInWithEmailAndPassword(user.email, user.senha);
  }

  cadastro(user: Usuario) {
    return this.afa.createUserWithEmailAndPassword(user.email, user.senha);
  }

  public logout() {
    return this.afa.signOut();
  }

  getAuth() {
    return this.afa;
  }
}
