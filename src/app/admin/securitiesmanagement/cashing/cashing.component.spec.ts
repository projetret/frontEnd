import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CashingComponent } from './cashing.component';

describe('CashingComponent', () => {
  let component: CashingComponent;
  let fixture: ComponentFixture<CashingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CashingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CashingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
