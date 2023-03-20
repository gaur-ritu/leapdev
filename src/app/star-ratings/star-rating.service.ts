import { Injectable } from '@angular/core';
import { MAX_STARS, FILLED_STAR, EMPTY_STAR } from '../contstant';
import { RatingsItem } from './data/rating';

@Injectable({
  providedIn: 'root',
})
export class StarRatingService {

  constructor() { }

  public setAverageRating(item: RatingsItem[]): number {
    let averageRating = item.reduce((a, { rate }) => a + rate, 0);
    let dataLength = item.length;
    return Math.ceil(averageRating / dataLength);
  }

  public setStar(rate: number): any[] {
    const arr: string[] = [];
    for(let i=0; i<MAX_STARS; i++){
      if(rate && i<rate)
      arr[i] = FILLED_STAR;
      else
      arr[i] = EMPTY_STAR;
    }   
    return arr;
  }
}