import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SecuritiesinInstancesComponent } from './securities-instances.component';

describe('SecuritiesinInstancesComponent', () => {
  let component: SecuritiesinInstancesComponent;
  let fixture: ComponentFixture<SecuritiesinInstancesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SecuritiesinInstancesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SecuritiesinInstancesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
