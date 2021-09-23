import { Component, Input, OnInit } from '@angular/core';
import { faStar as farStar } from '@fortawesome/free-regular-svg-icons';
import { faStar as fasStar, IconDefinition } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-product-rating',
  templateUrl: './product-rating.component.html',
  styleUrls: ['./product-rating.component.scss'],
})
export class ProductRatingComponent implements OnInit {
  @Input() rating!: number;

  star1!: IconDefinition;

  star2!: IconDefinition;

  star3!: IconDefinition;

  star4!: IconDefinition;

  star5!: IconDefinition;

  ngOnInit(): void {
    this.star1 = this.rating > 0 ? fasStar : farStar;
    this.star2 = this.rating > 1 ? fasStar : farStar;
    this.star3 = this.rating > 2 ? fasStar : farStar;
    this.star4 = this.rating > 3 ? fasStar : farStar;
    this.star5 = this.rating > 4 ? fasStar : farStar;
  }
}
