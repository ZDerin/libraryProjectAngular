import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuchinfoComponent } from './buchinfo.component';

describe('BuchinfoComponent', () => {
  let component: BuchinfoComponent;
  let fixture: ComponentFixture<BuchinfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BuchinfoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BuchinfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
