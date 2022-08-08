import {Component} from '@angular/core';
import {Friend} from "./friend";
import {AddFriendService} from "./add-friend.service";
import {OnInit} from "@angular/core";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'friend-list';
  languagesArr = ['html', 'css', 'javaScript', 'php'];
  friend = new Friend('', "", "", 0, "", "");
  allFriends : Friend[] = [];

  constructor(private addFriendService: AddFriendService) {}
  ngOnInit(){
    this.getFriends('http://localhost:6969/allFriends').then(()=>console.log(this.allFriends));

  }
  submitForm() {
    let component = this;
    this.addFriendService.addFriend(this.friend).subscribe({
      next(x) { component.getFriends('http://localhost:6969/allFriends').then(()=>console.log(component.allFriends))},
      error(err) { console.error('something wrong occurred: ' + err); },
      complete() { console.log('done'); }
    });
    /*this.addFriendService.addFriend(this.friend)
      .subscribe(
        success => console.log('something'),//this.getFriends('http://localhost:6969/allFriends'),
        error => console.log(error)
      );*/
   /* //console.log(this.friend);
    let observable = this.addFriendService.addFriend(this.friend);
    console.log(observable);
     observable.subscribe(data =>{
       console.log(data);
       //this.getFriends('http://localhost:6969/allFriends').then(()=>console.log(this.allFriends))
     } , error => console.log(error) , () => console.log('complete') );*/
  }

  public async getFriends(url : string): Promise<any>{
    //console.log(url);
    let response = await fetch(url , {
      method: 'GET', headers : {'Content-Type': 'application/json'}
    });
    //this.allFriends = await response.json();
    let data = await response.json();
    this.allFriends = [];
    data.forEach( (el:any ) =>{
      const newFriend = new Friend(el.firstName , el.lastName , el.email ,el.phoneNumber, el.message ,el.favLang);
      this.allFriends.push(newFriend);
    });
    //await console.log(this.allFriends);
  }
}
