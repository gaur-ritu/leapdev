import { Component, Input, AfterContentInit  } from "@angular/core";
import { RatingsItem } from "../../data/rating";
import { StarRatingService } from "../../data/star-rating.service";

@Component({
  selector: "app-rating",
  templateUrl: "./rating.component.html" ,
  host: {'class': 'ratings__item'}
})

export class RatingComponent implements AfterContentInit {
  @Input() ratingsItem: RatingsItem;
  name: any;
  content: any;
  rate: any;
  starArray: any[] = [];
 
  constructor(private starRatingSvc: StarRatingService){}

  ngAfterContentInit() {
    this.setRatingData(this.ratingsItem);
  }
  
  setRatingData(item: RatingsItem): void {
    console.log("item :::::"+ item);
    if(item) {
      this.starArray = this.starRatingSvc.setStar(item.rate);
      this.name = item.name;
      this.content = item.content;
      this.rate = item.rate;
      }
  }
}

