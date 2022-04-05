import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewSpecialistComponent } from './view-specialist.component';

describe('ViewSpecialistComponent', () => {
  let component: ViewSpecialistComponent;
  let fixture: ComponentFixture<ViewSpecialistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewSpecialistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewSpecialistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
