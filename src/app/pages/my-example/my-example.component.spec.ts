import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyExampleComponent } from './my-example.component';

describe('MyExampleComponent', () => {
  let component: MyExampleComponent;
  let fixture: ComponentFixture<MyExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MyExampleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
