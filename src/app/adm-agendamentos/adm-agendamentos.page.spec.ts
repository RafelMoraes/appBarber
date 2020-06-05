import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AdmAgendamentosPage } from './adm-agendamentos.page';

describe('AdmAgendamentosPage', () => {
  let component: AdmAgendamentosPage;
  let fixture: ComponentFixture<AdmAgendamentosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdmAgendamentosPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AdmAgendamentosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
