import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeometriComponent } from './geometri.component';

describe('GeometriComponent', () => {
  let component: GeometriComponent;
  let fixture: ComponentFixture<GeometriComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GeometriComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GeometriComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
