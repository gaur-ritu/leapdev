import { Component, Input, OnChanges } from "@angular/core";
import { RatingsItem } from "../../data/rating";


@Component({
  selector: "app-rating",
  templateUrl: "./rating.component.html" ,
  
})
export class RatingComponent implements OnChanges{
  @Input() ratings__item: RatingsItem;
  name: any;
  content: any;
  rate: any;
  FILLED_STAR: string="&#9733;"
  EMPTY_STAR: string ="&#9734;";
  MAX_STAR: number = 5;

  ngOnChanges() {
    if(this.ratings__item){
      this.name = this.ratings__item.name;
      this.content = this.ratings__item.content;
      this.rate = this.ratings__item.rate;
    }
  }
}

