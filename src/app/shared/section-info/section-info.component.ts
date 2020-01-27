import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-section-info',
  templateUrl: './section-info.component.html',
  styleUrls: ['./section-info.component.scss']
})
export class SectionInfoComponent implements OnInit {
  title;
  para;
  fonth1;
  imagePath1;
  imagePath2;
  blur_cls;
  para2;
  para3;
  sect2h2;
  displaynone;
  sect2p;

  constructor(private router: Router) { }

  ngOnInit() {
    if (this.router.url === '/Home' || this.router.url === '/') {
      this.home();
    }

    if (this.router.url === '/Vision') {
      this.vision();
  }

}


home() {
  if (this.router.url === '/Home' || this.router.url === '/') {
    this.title = 'The Complete Package for School Empowerment';
    // tslint:disable-next-line: max-line-length
    this.para = 'Edufront builds the most complete and useable tools for school education. Whether you require administration systems, content platforms, learning tools, and more, Edufront’s carefully designed features help you bring your students to the next level. Schools, Teachers and Students all benefit from better results and learning by relying on Edufront';
    this.imagePath1 = './assets/images/img-1.jpg ';
    this.imagePath2 = './assets/images/blur-image1.png  ';

    this.sect2h2 = {
      'height': '168px',
      'width': '444px',
      'color': '#568ce0'};

  }

}

vision() {
  if (this.router.url === '/Vision') {
    this.title = 'The Changing Needs of Education';
    // tslint:disable-next-line: max-line-length
    this.para = 'Education has been proven many times to be one of the greatest assets for both individuals and communities. The need for widespread quality education becomes greater as communities evolve.';
    // tslint:disable-next-line: max-line-length
    this.para2 = 'However not all educational systems are created equal: pursuit of basic instruction eventually transforms into the need to foster genuine learning, to move away from rote memorisation into ever deeper student understanding.';
    // tslint:disable-next-line: max-line-length
    this.para3 = 'The best outcome, and ultimate purpose of education, is to realise every student’s potential and elicit the mastery inherent in them. This is why a new engine of learning is required.';

    this.imagePath1 = './assets/images/img-2.jpg ';
    this.imagePath2 = './assets/images/blur-image2.png ';

    this.sect2h2 = {
      'height': '111px',
      'width': '434px',
      'color': '#00c4d2'};
  }
   this.displaynone = {
      'display': 'none'
   };

   this.blur_cls = {
    'bottom': '95px',
    'left': '-152px'  };

    this.sect2p = {
      'width': '547px'
    }

}

}
