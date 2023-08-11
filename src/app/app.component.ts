import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'simple-crm';
  hideMenu: Boolean = false;
  url!: string;
  signInActive: Boolean = false;
  registerUserActive: Boolean = false;
  forgotPasswordActive: Boolean = false;

  constructor(private Route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    setInterval(() => {
      this.url = window.location.href;
    if (this.url == 'http://localhost:4200/sign-in') {
      this.hideMenu = true;
      this.signInActive = true;
    }
    if (this.url == 'http://localhost:4200/register-user') {
      this.hideMenu = true;
      this.registerUserActive = true;
      this.signInActive = false;
    }
    if (this.url == 'http://localhost:4200/forgot-password') {
      this.hideMenu = true;
      this.forgotPasswordActive = true;
    }
    }, 50/ 1000);

  }
}
