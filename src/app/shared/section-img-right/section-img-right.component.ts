import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-section-img-right',
  templateUrl: './section-img-right.component.html',
  styleUrls: ['./section-img-right.component.scss']
})
export class SectionImgRightComponent implements OnInit {
  title: string;
  subtitle: string;

  constructor() { }

  ngOnInit() {
    this.title = 'Solutions Rooted in Research and Design';
    // tslint:disable-next-line: max-line-length
    this.subtitle = 'On the forefront of Edtech, Edufront gives educators the tools and frameworks to transform their desired outcomes.';

  }

}
