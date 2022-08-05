import {Component} from '@angular/core';
import {Friend} from "./friend";
import {AddFriendService} from "./add-friend.service";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'friend-list';
  languagesArr = ['html', 'css', 'javaScript', 'php'];
  friend = new Friend('', "", "", 0, "", "");

  constructor(private addFriendService: AddFriendService) {}

  submitForm() {
    console.log(this.friend);
    let observable = this.addFriendService.addFriend(this.friend);
    observable.subscribe(data => console.log(data) , error => console.log(error));
  }
}
