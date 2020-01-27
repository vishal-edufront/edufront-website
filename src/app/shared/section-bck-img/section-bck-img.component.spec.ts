import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionBckImgComponent } from './section-bck-img.component';

describe('SectionBckImgComponent', () => {
  let component: SectionBckImgComponent;
  let fixture: ComponentFixture<SectionBckImgComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SectionBckImgComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionBckImgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
