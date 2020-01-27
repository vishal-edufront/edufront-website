import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-section-img-left',
  templateUrl: './section-img-left.component.html',
  styleUrls: ['./section-img-left.component.scss']
})
export class SectionImgLeftComponent implements OnInit {
  title;
  subtitle;

  constructor() { }

  ngOnInit() {
    this.title = 'The New Mastery Engine';
    // tslint:disable-next-line: max-line-length
    this.subtitle = 'Edufront combines an education platform with discrete features and applications that puts the best technology and design on offer at the service of efficiency and eliciting student mastery outcomes.';

  }

}
