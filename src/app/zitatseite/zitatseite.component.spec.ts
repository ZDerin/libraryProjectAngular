import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZitatseiteComponent } from './zitatseite.component';

describe('ZitatseiteComponent', () => {
  let component: ZitatseiteComponent;
  let fixture: ComponentFixture<ZitatseiteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ZitatseiteComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ZitatseiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
