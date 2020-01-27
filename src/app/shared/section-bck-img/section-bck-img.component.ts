import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-section-bck-img',
  templateUrl: './section-bck-img.component.html',
  styleUrls: ['./section-bck-img.component.scss']
})
export class SectionBckImgComponent implements OnInit {
  title;
  subtitle;

  constructor() { }

  ngOnInit() {
    this.title = 'AI and Data in Education';
    // tslint:disable-next-line: max-line-length
    this.subtitle = 'Humans minds unassisted have limits to what they can do, remember, or analyse at any given time. Edufront’s core focus on AI and data is uniquely suited to go beyond these limits.';

  }

}
