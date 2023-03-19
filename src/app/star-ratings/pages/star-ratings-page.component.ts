import { Component } from "@angular/core";
import data from "../data/testData.json";  
import { RatingsItem } from "../data/rating";

@Component({
  selector: "app-star-ratings-page",
  templateUrl: "./star-ratings-page.component.html",
})
export class StarRatingsPageComponent {
  public ratings: RatingsItem[] = data;
  public firstRating: RatingsItem ;

  constructor() {
    if(this.ratings)
    this.firstRating = this.ratings[0];
  }
}
