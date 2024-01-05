import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LadevorgangComponent } from './ladevorgang.component';

describe('LadevorgangComponent', () => {
  let component: LadevorgangComponent;
  let fixture: ComponentFixture<LadevorgangComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LadevorgangComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LadevorgangComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
