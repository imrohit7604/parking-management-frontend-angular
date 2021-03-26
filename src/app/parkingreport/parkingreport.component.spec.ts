import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParkingreportComponent } from './parkingreport.component';

describe('ParkingreportComponent', () => {
  let component: ParkingreportComponent;
  let fixture: ComponentFixture<ParkingreportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParkingreportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ParkingreportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
