import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-news-more',
  templateUrl: './news-more.component.html',
  styleUrls: ['./news-more.component.scss'],
})
export class NewsMoreComponent implements OnInit {
  API_KEY: String = 'YLOYYPLC8FAKSOSJ';
  url =
    'https://www.alphavantage.co/query?function=NEWS_SENTIMENT&tickers=AAPL&apikey=' +
    this.API_KEY;
  public newsJson = [];
  public loading = true;

  @ViewChild('title') title!: ElementRef;

  ngOnInit(): void {
    this.loadNews();
  }


  /**
   * This function loads the json with the daily news from the API and saves it localy
   *
   */
  async loadNews() {
    let response = await fetch(this.url);
    let responseAsJson = await response.json();
    this.newsJson = responseAsJson['feed'];
    this.loading = false;
  }
}
