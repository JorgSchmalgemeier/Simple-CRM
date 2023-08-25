import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-news-more',
  templateUrl: './news-more.component.html',
  styleUrls: ['./news-more.component.scss']
})
export class NewsMoreComponent implements OnInit {
  API_KEY: String = 'PZLW2BSXHHCBJWVO';
  url = 'https://www.alphavantage.co/query?function=NEWS_SENTIMENT&tickers=AAPL&apikey=' + this.API_KEY;
  public newsJson = [];
  public loading = true;



  ngOnInit(): void {
    this.loadNews();
  }


  async loadNews() {
    let response = await fetch(this.url);
    let responseAsJson = await response.json();
    this.newsJson = responseAsJson['feed'];
    console.log(this.newsJson);
    this.loading = false;
  }
}
