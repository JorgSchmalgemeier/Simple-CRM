import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'simple-crm';
  hideMenu: Boolean = true;
  showSignIn: Boolean = false;
  url!: string;

  constructor(private Route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    setInterval(() => {
      this.url = window.location.href;
    if (this.url == 'http://localhost:4200/') {
      this.hideMenu = true;
      this.showSignIn = true;
    } else {
      this.hideMenu = false;
      this.showSignIn = false;
    }
    // if (this.url == 'http://localhost:4200/dashboard') {
    //   this.hideMenu = false;
    // }
    }, 100/ 1000);
  }
}
