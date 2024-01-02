import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerwaltelesewunschlisteComponent } from './verwaltelesewunschliste.component';

describe('ReadingwishlistComponent', () => {
  let component: VerwaltelesewunschlisteComponent;
  let fixture: ComponentFixture<VerwaltelesewunschlisteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VerwaltelesewunschlisteComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VerwaltelesewunschlisteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
