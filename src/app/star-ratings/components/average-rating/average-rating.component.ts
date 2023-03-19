import { Component, Input } from "@angular/core";
import { RatingsItem } from "../../data/rating";

@Component({
  selector: "app-average-rating",
  templateUrl: "./average-rating.component.html" ,
})
export class AverageRatingComponent {
@Input() ratings: RatingsItem[];
avgRating: any;
FILLED_STAR: string="&#9733;"
EMPTY_STAR: string ="&#9734;";
MAX_STAR: number = 5;

ngOnChanges() {
  if(this.ratings){
    let averageRating = this.ratings.reduce((a, {rate}) => a + rate, 0);
    let dataLength = this.ratings.length;
    this.avgRating = Math.ceil(averageRating/dataLength);
  }
}

}
