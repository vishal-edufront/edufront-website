import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-complexity',
  templateUrl: './product-complexity.component.html',
  styleUrls: ['./product-complexity.component.scss']
})
export class ProductComplexityComponent implements OnInit {
  title: string;
  subtitle: string;

  constructor() { }

  ngOnInit() {
    this.title = 'Removes Complexity';
    // tslint:disable-next-line: max-line-length
    this.subtitle = 'Edufront is a wholistic system providing infrastructure, features and applications to encompass all aspects of educational life; so that schools and Educators don’t have to.';

  }

}
