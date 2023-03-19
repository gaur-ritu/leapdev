import { Component, Input } from "@angular/core";
import { RatingsItem } from "../../data/rating";

@Component({
  selector: "app-ratings-list",
  templateUrl: "./ratings-list.component.html",
})
export class RatingsListComponent {
  @Input() ratings: RatingsItem[];

}
