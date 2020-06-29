import { Component, OnInit } from '@angular/core';
import { Agendamentos } from '../intefaces/agendamentos';
import { AgendamentosService } from '../services/agendamentos.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-adm-agendamentos',
  templateUrl: './adm-agendamentos.page.html',
  styleUrls: ['./adm-agendamentos.page.scss'],
})
export class AdmAgendamentosPage implements OnInit {
  [x: string]: any;

  private agenda = new Array<Agendamentos>();
  private agendaSubscription: Subscription;


  constructor(private aendaService: AgendamentosService) {
    this.agendaSubscription = this.agendamentosService.getAgendados().subscribe(data => {
      this.agenda = data;
    });
  }

  ngOnInit() { }

  ngOnDestroy(){
    this.agendaSubscription.unsubscribe();
  }
}
