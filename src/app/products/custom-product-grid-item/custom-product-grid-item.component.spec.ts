import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomProductGridItemComponent } from './custom-product-grid-item.component';

describe('CustomProductGridItemComponent', () => {
  let component: CustomProductGridItemComponent;
  let fixture: ComponentFixture<CustomProductGridItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomProductGridItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomProductGridItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
