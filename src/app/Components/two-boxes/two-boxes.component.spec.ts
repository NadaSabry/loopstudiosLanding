import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TwoBoxesComponent } from './two-boxes.component';

describe('TwoBoxesComponent', () => {
  let component: TwoBoxesComponent;
  let fixture: ComponentFixture<TwoBoxesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TwoBoxesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TwoBoxesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
