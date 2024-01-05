import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilteredStandorteComponent } from './filtered-standorte.component';

describe('FilteredStandorteComponent', () => {
  let component: FilteredStandorteComponent;
  let fixture: ComponentFixture<FilteredStandorteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FilteredStandorteComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FilteredStandorteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
