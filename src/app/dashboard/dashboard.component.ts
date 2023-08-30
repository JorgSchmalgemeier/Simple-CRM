import { Component, OnInit } from '@angular/core';
import { ChartConfiguration, ChartOptions } from 'chart.js';
import { ReviewsService } from 'src/moduls/reviews.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  providers: [ReviewsService],
})
export class DashboardComponent implements OnInit {
  graphWeek: Boolean = true;
  graphMonth: Boolean = false;
  graphYear: Boolean = false;
  lineChart2023: Boolean = true;
  lineChart2022: Boolean = false;
  lineChart2021: Boolean = false;

  markers: any[] = [];
  public loading = true;

  constructor(public reviewsService: ReviewsService) {}

  ngOnInit(): void {
    this.reviewsService.subscribeAllReviews();

    setTimeout(() => {
      this.loading = false;
    }, 1500);
  }


  // Doughnut Graph Week
  public doughnutChartLabelsWeek: string[] = [
    'Product One',
    'Product Two',
    'Product Three',
  ];
  public doughnutChartDatasetsWeek: ChartConfiguration<'doughnut'>['data']['datasets'] =
    [{  data: [631, 467, 108],
        label: 'Sales',
        backgroundColor: ["#63AEFF","#ffd502","#45cb47"],
        //hoverBackgroundColor: ["#96b7b9","#718283","#5c6b6d"],
      }];

  public doughnutChartOptionsWeek: ChartConfiguration<'doughnut'>['options'] = {
    responsive: false,
    cutout: 95,
  };

  // Doughnut Graph Month
  public doughnutChartLabelsMonth: string[] = [
    'Product One',
    'Product Two',
    'Product Three',
  ];
  public doughnutChartDatasetsMonth: ChartConfiguration<'doughnut'>['data']['datasets'] =
    [{  data: [2567, 2098, 1268],
        label: 'Sales',
        backgroundColor: ["#63AEFF","#ffd502","#45cb47"],
        //hoverBackgroundColor: ["#96b7b9","#718283","#5c6b6d"],
      }];

  public doughnutChartOptionsMonth: ChartConfiguration<'doughnut'>['options'] =
    {
      responsive: false,
      cutout: 95,
    };

  // Doughnut Graph Year
  public doughnutChartLabelsYear: string[] = [
    'Product One',
    'Product Two',
    'Product Three',
  ];
  public doughnutChartDatasetsYear: ChartConfiguration<'doughnut'>['data']['datasets'] =
    [{  data: [7340, 7784, 1467],
        label: 'Sales',
        backgroundColor: ["#63AEFF","#ffd502","#45cb47"],
        //hoverBackgroundColor: ["#96b7b9","#718283","#5c6b6d"],
      }];

  public doughnutChartOptionsYear: ChartConfiguration<'doughnut'>['options'] = {
    responsive: false,
    maintainAspectRatio: false,
    cutout: 95,
  };

  //Line Chart 2023

  public lineChartData2023: ChartConfiguration<'line'>['data'] = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
    datasets: [
      {
        data: [65, 59, 80, 81, 56, 55, 40, 45, 55],
        label: 'Sales',
        fill: true,
        tension: 0.2,
        borderColor: 'rgba(0, 0, 0, 0.1)',
        backgroundColor: '#63aeffbf',
        pointBackgroundColor: '#63aeffbf',
        pointBorderColor: 'rgba(0,0,0,0.2)',
        hoverBorderColor: 'rgba(0,0,0,0.2)',
        borderWidth: 1,

        // data: [ 65, 59, 80, 81, 56, 55, 40 ],
        // label: '2022',
        // fill: true,
        // tension: 0.1,
        // hoverBorderColor: 'red',
      },
    ],
  };
  public lineChartOptions2023: ChartOptions<'line'> = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: {
        grid: {
          display: false
        }
      },
      y: {
        grid: {
          display: false
        }
      }
    }
  };
  public lineChartLegend2023 = false;

  //Line Chart 2022
  public lineChartData2022: ChartConfiguration<'line'>['data'] = {
    labels: [
      'Jan',
      'Feb',
      'Mar',
      'Apr',
      'May',
      'Jun',
      'Jul',
      'Aug',
      'Sep',
      'Oct',
      'Nov',
      'Dec',
    ],
    datasets: [
      {
        data: [55, 58, 77, 79, 55, 55, 60, 55, 56, 67, 70, 71],
        label: 'Sales',
        fill: true,
        tension: 0.2,
        borderColor: 'rgba(0, 0, 0, 0.1)',
        backgroundColor: '#63aeffbf',
        pointBackgroundColor: '#63aeffbf',
        pointBorderColor: 'rgba(0,0,0,0.2)',
        hoverBorderColor: 'rgba(0,0,0,0.2)',
        borderWidth: 1,
      },
    ],
  };
  public lineChartOptions2022: ChartOptions<'line'> = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: {
        grid: {
          display: false
        }
      },
      y: {
        grid: {
          display: false
        }
      }
    }
  };
  public lineChartLegend2022 = false;

  //Line Chart 2021
  public lineChartData2021: ChartConfiguration<'line'>['data'] = {
    labels: [
      'Jan',
      'Feb',
      'Mar',
      'Apr',
      'May',
      'Jun',
      'Jul',
      'Aug',
      'Sep',
      'Oct',
      'Nov',
      'Dec',
    ],
    datasets: [
      {
        data: [30, 43, 55, 64, 55, 55, 60, 65, 56, 67, 80, 71],
        label: 'Sales',
        fill: true,
        tension: 0.2,
        borderColor: 'rgba(0, 0, 0, 0.1)',
        backgroundColor: '#63aeffbf',
        pointBackgroundColor: '#63aeffbf',
        pointBorderColor: 'rgba(0,0,0,0.2)',
        hoverBorderColor: 'rgba(0,0,0,0.2)',
        borderWidth: 1,
      },
    ],
  };
  public lineChartOptions2021: ChartOptions<'line'> = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: {
        grid: {
          display: false
        }
      },
      y: {
        grid: {
          display: false
        }
      }
    }
  };
  public lineChartLegend2021 = false;

  showGraphWeek() {
    this.graphMonth = false;
    this.graphYear = false;
    this.graphWeek = true;
  }

  showGraphMonth() {
    this.graphWeek = false;
    this.graphYear = false;
    this.graphMonth = true;
  }

  showGraphYear() {
    this.graphWeek = false;
    this.graphMonth = false;
    this.graphYear = true;
  }

  showLineChart2023() {
    this.lineChart2022 = false;
    this.lineChart2021 = false;
    this.lineChart2023 = true;
  }

  showLineChart2022() {
    this.lineChart2023 = false;
    this.lineChart2021 = false;
    this.lineChart2022 = true;
  }

  showLineChart2021() {
    this.lineChart2022 = false;
    this.lineChart2023 = false;
    this.lineChart2021 = true;
  }
}
