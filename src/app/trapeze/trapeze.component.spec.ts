import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrapezeComponent } from './trapeze.component';

describe('TrapezeComponent', () => {
  let component: TrapezeComponent;
  let fixture: ComponentFixture<TrapezeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrapezeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TrapezeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
