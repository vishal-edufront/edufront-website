import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionImgLeftComponent } from './section-img-left.component';

describe('SectionImgLeftComponent', () => {
  let component: SectionImgLeftComponent;
  let fixture: ComponentFixture<SectionImgLeftComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SectionImgLeftComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionImgLeftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
