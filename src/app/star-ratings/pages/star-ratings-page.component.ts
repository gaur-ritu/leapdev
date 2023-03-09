import { Component } from "@angular/core";
import data from "../data/testData.json";

@Component({
  selector: "app-star-ratings-page",
  templateUrl: "./star-ratings-page.component.html",
})
export class StarRatingsPageComponent {
  public ratings = data;
}
