import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionImgRightComponent } from './section-img-right.component';

describe('SectionImgRightComponent', () => {
  let component: SectionImgRightComponent;
  let fixture: ComponentFixture<SectionImgRightComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SectionImgRightComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionImgRightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
