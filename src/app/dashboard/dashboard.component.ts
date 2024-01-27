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
    }, 2000);
  }


  // Doughnut Graph Week
  public doughnutChartLabelsWeek: string[] = [
    'Product One',
    'Product Two',
    'Product Three',
  ];
  public doughnutChartDatasetsWeek: ChartConfiguration<'doughnut'>['data']['datasets'] =
    [{  data: [631, 467, 280],
        label: 'Sales',
        backgroundColor: ["#63AEFF","#ffd502","#5ede60"],
        //hoverBackgroundColor: ["#96b7b9","#718283","#5c6b6d"],
      }];

  public doughnutChartOptionsWeek: ChartConfiguration<'doughnut'>['options'] = {
    responsive: true,
    cutout: 95,
  };

  // Doughnut Graph Month
  public doughnutChartLabelsMonth: string[] = [
    'Product One',
    'Product Two',
    'Product Three',
  ];
  public doughnutChartDatasetsMonth: ChartConfiguration<'doughnut'>['data']['datasets'] =
    [{  data: [2567, 1698, 1860],
        label: 'Sales',
        backgroundColor: ["#63AEFF","#ffd502","#5ede60"],
        //hoverBackgroundColor: ["#96b7b9","#718283","#5c6b6d"],
      }];

  public doughnutChartOptionsMonth: ChartConfiguration<'doughnut'>['options'] =
    {
      responsive: true,
      cutout: 95,
    };

  // Doughnut Graph Year
  public doughnutChartLabelsYear: string[] = [
    'Product One',
    'Product Two',
    'Product Three',
  ];
  public doughnutChartDatasetsYear: ChartConfiguration<'doughnut'>['data']['datasets'] =
    [{  data: [17654, 18433, 24399],
        label: 'Sales',
        backgroundColor: ["#63AEFF","#ffd502","#5ede60"],
        //hoverBackgroundColor: ["#96b7b9","#718283","#5c6b6d"],
      }];

  public doughnutChartOptionsYear: ChartConfiguration<'doughnut'>['options'] = {
    responsive: true,
    maintainAspectRatio: false,
    cutout: 95,
  };


  //Line Chart 2023
  public lineChartData2023: ChartConfiguration<'line'>['data'] = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    datasets: [
      {
        data: [5836, 5787, 5950, 5960, 6129, 6190, 6028, 6280, 6320, 6280, 6340, 6500],
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
        data: [3855, 4258, 4177, 4379, 4355, 4555, 4760, 4555, 4256, 4367, 4670, 4871],
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
        data: [2330, 2143, 2555, 2764, 2855, 3255, 3360, 3665, 2956, 3767, 3880, 3971],
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


  /**
   * Show the choosen graph and hide the others
   *
   */
  showGraphWeek() {
    this.graphMonth = false;
    this.graphYear = false;
    this.graphWeek = true;
  }


  /**
   * Show the choosen graph and hide the others
   *
   */
  showGraphMonth() {
    this.graphWeek = false;
    this.graphYear = false;
    this.graphMonth = true;
  }


  /**
   * Show the choosen graph and hide the others
   *
   */
  showGraphYear() {
    this.graphWeek = false;
    this.graphMonth = false;
    this.graphYear = true;
  }


  /**
   * Show the choosen graph and hide the others
   *
   */
  showLineChart2023() {
    this.lineChart2022 = false;
    this.lineChart2021 = false;
    this.lineChart2023 = true;
  }


  /**
   * Show the choosen graph and hide the others
   *
   */
  showLineChart2022() {
    this.lineChart2023 = false;
    this.lineChart2021 = false;
    this.lineChart2022 = true;
  }


  /**
   * Show the choosen graph and hide the others
   *
   */
  showLineChart2021() {
    this.lineChart2022 = false;
    this.lineChart2023 = false;
    this.lineChart2021 = true;
  }
}
