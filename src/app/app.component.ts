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
  dashboardActive = false;
  customerActive = false;
  reviewsActive = false;
  newsActive = false;


  constructor(private Route: ActivatedRoute, private router: Router) {}


  ngOnInit(): void {
    setInterval(() => {
      this.url = window.location.href;
    if (this.url == 'https://simple-crm.joerg-schmalgemeier.com/') {
      this.hideMenu = true;
      this.showSignIn = true;
    } else {
      this.hideMenu = false;
      this.showSignIn = false;
    }}, 100/ 1000);

    this.checkCurrentURL();
  }


  /**
   * Check the current URL and highlight the link in the sidenav bar
   *
   */
  checkCurrentURL() {
    if (window.location.href == 'https://localhost:4200/dashboard') {
      this.dashboardActive = true;
    } else if (window.location.href == 'https://simple-crm.joerg-schmalgemeier.com/') {
      this.dashboardActive = true;
    } else if (window.location.href == 'https://simple-crm.joerg-schmalgemeier.com/customer') {
      this.customerActive = true;
    } else if (window.location.href == 'https://simple-crm.joerg-schmalgemeier.com/reviews') {
      this.reviewsActive = true;
    } else if (window.location.href == 'https://simple-crm.joerg-schmalgemeier.com/news') {
      this.newsActive = true;
    } else {
      this.customerActive = true;
    }
  }


  /**
   * Highlight the link in the sidenav var if the user click on it
   *
   * @param link
   */
  setActiveBorder(link: string) {
    if (link == 'dashboard') {
      this.dashboardActive = true;
      this.customerActive = false;
      this.reviewsActive = false;
      this.newsActive = false;
    }
    if (link == 'customer') {
      this.dashboardActive = false;
      this.customerActive = true;
      this.reviewsActive = false;
      this.newsActive = false;
    }
    if (link == 'reviews') {
      this.dashboardActive = false;
      this.customerActive = false;
      this.reviewsActive = true;
      this.newsActive = false;
    }
    if (link == 'news') {
      this.dashboardActive = false;
      this.customerActive = false;
      this.reviewsActive = false;
      this.newsActive = true;
    }
  }
}
