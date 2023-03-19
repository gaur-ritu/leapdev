import { Component, EventEmitter, Input, Output } from "@angular/core";
import { Friend } from "../../types/friend";

@Component({
  selector: "app-friend-list",
  templateUrl: "./friend-list.component.html", 
})
export class FriendListComponent {
  @Input() friends: any[];
  @Input() error: string;
  @Output() emitId = new EventEmitter<number>();
  clicked: number;

  addFriendLike(id: number) {
    this.emitId.emit(id);
  }
}
