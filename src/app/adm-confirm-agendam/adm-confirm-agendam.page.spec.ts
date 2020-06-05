import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AdmConfirmAgendamPage } from './adm-confirm-agendam.page';

describe('AdmConfirmAgendamPage', () => {
  let component: AdmConfirmAgendamPage;
  let fixture: ComponentFixture<AdmConfirmAgendamPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdmConfirmAgendamPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AdmConfirmAgendamPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
