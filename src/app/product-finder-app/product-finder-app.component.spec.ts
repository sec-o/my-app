import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductFinderAppComponent } from './product-finder-app.component';

describe('ProductFinderAppComponent', () => {
  let component: ProductFinderAppComponent;
  let fixture: ComponentFixture<ProductFinderAppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductFinderAppComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductFinderAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
