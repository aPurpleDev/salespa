import {Component, Input, OnInit} from '@angular/core';
import { AuthService, FacebookLoginProvider, SocialUser } from 'angularx-social-login';

import {SECRETBOOKS} from "./mock-books";
import {Book} from "./book";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'salespa';
  user: SocialUser;
  loggedIn: boolean;
  secretBooks: Book[] = SECRETBOOKS;

  constructor(private authService: AuthService) { }

  signInWithFB(): void {
    this.authService.signIn(FacebookLoginProvider.PROVIDER_ID);
  }

  signOut(): void {
    this.authService.signOut();
  }

  ngOnInit() {
    this.authService.authState.subscribe((user) => {
      this.user = user;
      this.loggedIn = (user != null);
      console.log(this.user);
    });
  }
}
