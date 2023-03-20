import { AfterContentChecked, Component, Input, OnChanges } from "@angular/core";
import { RatingsItem } from "../../data/rating";
import { StarRatingService } from "../../data/star-rating.service";

@Component({
  selector: "app-average-rating",
  templateUrl: "./average-rating.component.html",
  host: {'class': 'ratings__average'}
})

export class AverageRatingComponent implements AfterContentChecked {
@Input() ratings: RatingsItem[];
avgRating: any;
starArray: any[] = [];

constructor(private starRatingSvc: StarRatingService){
}

ngAfterContentChecked() {
  if(this.ratings){
    this.avgRating = this.starRatingSvc.setAverageRating(this.ratings);
    this.starArray = this.starRatingSvc.setStar(this.avgRating);
  }
}

}

