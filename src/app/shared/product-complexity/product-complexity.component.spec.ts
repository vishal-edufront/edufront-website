import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductComplexityComponent } from './product-complexity.component';

describe('ProductComplexityComponent', () => {
  let component: ProductComplexityComponent;
  let fixture: ComponentFixture<ProductComplexityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductComplexityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductComplexityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
