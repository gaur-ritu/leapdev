import { Component } from "@angular/core";
import { FETCH_ERROR, LIKE_ERROR } from "../../contstant";
import { SocialAppService } from "../social-app.service";
import { Friend } from "../types/friend";

@Component({
  selector: "app-social-app-page",
  templateUrl: "./social-app-page.component.html",
})
export class SocialAppPageComponent {
  friends: any[] = [];
  currentId: number;
  error: string;

  constructor(private socialAppSvc: SocialAppService){}

  ngOnInit() {
    this.error ='';
    this.socialAppSvc.getFriends()
    .subscribe({
      next: res => this.friends = this.sortFriends(res),
      error: err => this.error = FETCH_ERROR
    }); 
  }

  addFriendLike(id: number): void {
    this.socialAppSvc.addFriendLike(id).subscribe({
      next: res => this.updateLikeCount(res, id),
      error: err => { 
        this.error = LIKE_ERROR;
      }
  });
  }

  updateLikeCount(obj: any, id: number): void {
    const currentIndex = this.friends.findIndex((friend) => friend.id === id);
    this.friends[currentIndex].likeCount = obj.likeCount;
    this.friends[currentIndex].disabled = true;
    this.sortFriends(this.friends);
  }

  sortFriends(friends: Friend[]): Friend[] {
    return friends.sort((a,b) => 
    {
      if(a.likeCount != b.likeCount)
        return b.likeCount - a.likeCount;
      if (a.name < b.name)
          return -1;
      if (a.name < b.name)
          return -1;

          return 0;
    });
  }
}
