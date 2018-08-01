import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrivateclientsComponent } from './privateclients.component';

describe('PrivateclientsComponent', () => {
  let component: PrivateclientsComponent;
  let fixture: ComponentFixture<PrivateclientsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrivateclientsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrivateclientsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
