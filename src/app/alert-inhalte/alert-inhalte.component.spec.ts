import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlertInhalteComponent } from './alert-inhalte.component';

describe('AlertInhalteComponent', () => {
  let component: AlertInhalteComponent;
  let fixture: ComponentFixture<AlertInhalteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AlertInhalteComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AlertInhalteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
