import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppSelectionComponent } from './app-selection.component';

describe('AppSelectionComponent', () => {
  let component: AppSelectionComponent;
  let fixture: ComponentFixture<AppSelectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppSelectionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppSelectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
