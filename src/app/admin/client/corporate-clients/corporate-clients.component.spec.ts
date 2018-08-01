import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CorporateClientsComponent } from './corporate-clients.component';

describe('CorporateClientsComponent', () => {
  let component: CorporateClientsComponent;
  let fixture: ComponentFixture<CorporateClientsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CorporateClientsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CorporateClientsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
