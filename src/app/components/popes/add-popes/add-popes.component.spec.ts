import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPopesComponent } from './add-popes.component';

describe('AddPopesComponent', () => {
  let component: AddPopesComponent;
  let fixture: ComponentFixture<AddPopesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddPopesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddPopesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
