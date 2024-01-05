import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StandorteComponent } from './standorte.component';

describe('StandorteComponent', () => {
  let component: StandorteComponent;
  let fixture: ComponentFixture<StandorteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StandorteComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StandorteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
