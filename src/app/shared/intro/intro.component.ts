import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.scss']
})
export class IntroComponent implements OnInit {
  title: string;
  para: string;
  fonth1;
  imagePath1;

  constructor(private router: Router) { }

  ngOnInit() {
    if (this.router.url === '/Home') {
      this.home();

    }

    if (this.router.url === '/Vision') {
      this.vision();



  }

}


home() {
  if (this.router.url === '/Home') {
    this.title = 'Education Upgraded';
    // tslint:disable-next-line: max-line-length
    this.para = 'Edufront is the best software and solution platform to realising every student’s potential. We empower personalised, flexible and complete learning for schools worldwide.';
    this.imagePath1 = 'assets/images/home_hero.svg';
    this.fonth1 = {'font-size': '80px'};

  }

}

vision() {
  if (this.router.url === '/Vision') {
    this.title = 'Our Mission is to transform school education';
    // tslint:disable-next-line: max-line-length
    this.para = 'Edufront is a technology company that upgrades and augments the outcomes of school education. Schools of every kind and circumstance benefit from our software to manage and personalise education in a changing modern word';
    this.imagePath1 = 'assets/images/vision_hero.svg';
    this.fonth1 = {'font-size': '60px'};

  }

}

}
