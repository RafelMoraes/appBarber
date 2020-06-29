import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Agendamentos } from '../intefaces/agendamentos';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AgendamentosService {

  private agendaCollection: AngularFirestoreCollection<Agendamentos>;

  constructor(private afs: AngularFirestore) {

    this.agendaCollection = this.afs.collection<Agendamentos>('Agendados');
  }

  getAgendados() {
    return this.agendaCollection.snapshotChanges().pipe(
      map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;

          return { id, ...data };
        });
      })
    );

  }

  addAgendados(Agendados: Agendamentos) {
    return this.agendaCollection.add(Agendados);
  }

  getAgendado(id: string) {
    return this.agendaCollection.doc<Agendamentos>(id).valueChanges();
  }

  deleteAgendado(id: string) {
    return this.agendaCollection.doc(id).delete();
  }
}
