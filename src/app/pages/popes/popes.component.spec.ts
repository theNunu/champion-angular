import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopesComponent } from './popes.component';

describe('PopesComponent', () => {
  let component: PopesComponent;
  let fixture: ComponentFixture<PopesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PopesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PopesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
