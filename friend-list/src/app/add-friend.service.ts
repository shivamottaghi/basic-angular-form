import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Friend} from "./friend";
import { Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AddFriendService {
  private url: string = 'http://localhost:6969/allFriends';
  //private url: String = '';

  constructor(private http: HttpClient)  {}

  addFriend(friend: Friend):Observable<Friend> {
    return this.http.post<Friend>(this.url , friend );
  }
}
