import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MfgRecomendationsComponent } from './mfg-recomendations.component';

describe('MfgRecomendationsComponent', () => {
  let component: MfgRecomendationsComponent;
  let fixture: ComponentFixture<MfgRecomendationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MfgRecomendationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MfgRecomendationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
