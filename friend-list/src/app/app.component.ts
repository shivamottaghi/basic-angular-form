import {Component} from '@angular/core';
import {Friend} from "./friend";
import {AddFriendService} from "./add-friend.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private addFriendService: AddFriendService;
  title = 'friend-list';
  languagesArr = ['html', 'css', 'javaScript', 'php'];
  friend = new Friend('', "", "", 0, "", "");

  constructor(addFriendService: AddFriendService) {
    this.addFriendService = addFriendService;

  }

  submitForm() {
    console.log(this.friend);
    this.addFriendService.addFriend(this.friend);

  }
}
