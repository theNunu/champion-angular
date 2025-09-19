import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListPopesComponent } from './list-popes.component';

describe('ListPopesComponent', () => {
  let component: ListPopesComponent;
  let fixture: ComponentFixture<ListPopesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListPopesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListPopesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
