import { Component, Input, AfterContentChecked  } from "@angular/core";
import { RatingsItem } from "../../data/rating";
import { StarRatingService } from "../../star-rating.service";

@Component({
  selector: "app-rating",
  templateUrl: "./rating.component.html" ,
  host: {'class': 'ratings__item'}
})

export class RatingComponent implements AfterContentChecked {
  @Input() name: any;
  @Input() content: any;
  @Input() rate: any;
  starArray: any[] = [];
 
  constructor(private starRatingSvc: StarRatingService){}

  ngAfterContentChecked() {
    if(this.rate)
    this.starArray = this.starRatingSvc.setStar(this.rate);
  }
}

