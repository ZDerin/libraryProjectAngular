import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllebuecherComponent } from './allebuecher.component';

describe('AllebuecherComponent', () => {
  let component: AllebuecherComponent;
  let fixture: ComponentFixture<AllebuecherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AllebuecherComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AllebuecherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
