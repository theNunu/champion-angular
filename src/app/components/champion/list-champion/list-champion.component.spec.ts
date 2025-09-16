import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListChampionComponent } from './list-champion.component';

describe('ListChampionComponent', () => {
  let component: ListChampionComponent;
  let fixture: ComponentFixture<ListChampionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListChampionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListChampionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
