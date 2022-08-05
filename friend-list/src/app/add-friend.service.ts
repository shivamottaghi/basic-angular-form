import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Friend} from "./friend";

@Injectable({
  providedIn: 'root'
})
export class AddFriendService {
  private http: HttpClient;
  private url: String = "";
  constructor(http: HttpClient) {
    this.http = http;
  }

  addFriend(friend: Friend) {
    let http$ = this.http.post(this.url , friend);
    http$.subscribe(
      res => console.log('HTTP response' , res),
      err => console.log('HTTP response' , err),
      () => console.log('HTTP request completed')
    );
  }
}
