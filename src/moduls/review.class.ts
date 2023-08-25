export class Review {
  product: string;
  rating: string;
  title: string;
  text: number;
  costumerName: string;
  date: any;
  day: any;
  month: any;
  year: any;

  constructor(obj?: any) {
    this.product = obj ? obj.product : '';
    this.rating = obj ? obj.rating : '';
    this.title = obj ? obj.title : '';
    this.text = obj ? obj.text : '';
    this.costumerName = obj ? obj.costumerName : '';
    this.date = obj ? obj.date : '';
    this.day = obj ? obj.day : '';
    this.month = obj ? obj.month : '';
    this.year = obj ? obj.year : '';
  }

  public reviewToJSON() {
    return {
      product: this.product,
      rating: this.rating,
      title: this.title,
      text: this.text,
      costumerName: this.costumerName,
      date: this.date,
      day: this.day,
      month: this.month,
      year: this.year
    };
  }
}
