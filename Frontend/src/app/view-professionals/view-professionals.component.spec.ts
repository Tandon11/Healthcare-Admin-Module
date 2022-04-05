import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewProfessionalsComponent } from './view-professionals.component';

describe('ViewProfessionalsComponent', () => {
  let component: ViewProfessionalsComponent;
  let fixture: ComponentFixture<ViewProfessionalsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewProfessionalsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewProfessionalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
