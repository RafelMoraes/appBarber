import { Injectable } from '@angular/core';

import { Storage } from '@ionic/storage';
import { Agendamento } from '../models/agendamento';

@Injectable({
  providedIn: 'root'
})
export class AgendamentoService {

  constructor(private storage: Storage) { }

  public async salvar(agendamento: Agendamento) {
    if (agendamento.nome) {
      await this.storage.set(agendamento.nome, agendamento);
      return true;
    } else {
      return false;
    }
  }

}
