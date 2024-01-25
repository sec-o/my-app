import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-star-rating',
  templateUrl: './star-rating.component.html',
  styleUrls: ['./star-rating.component.css'],
})
export class StarRatingComponent {
  @Input() maxStars: number = 5;
  @Input() selectedStar: number = 0;
  @Output() ratingClicked: EventEmitter<number> = new EventEmitter<number>();

  stars: number[] = [];
  activateEditStarRating: boolean = false;

  constructor() {
    this.stars = Array(this.maxStars)
      .fill(0)
      .map((_, i) => i + 1);
  }

  rateArticle(rating: number): void {
    this.selectedStar = rating;
    this.ratingClicked.emit(rating);
  }
}
