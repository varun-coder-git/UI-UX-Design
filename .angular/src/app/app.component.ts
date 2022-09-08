import { Component, ViewChild} from '@angular/core';
import {
  ApexAxisChartSeries,
  ApexChart,
  ChartComponent,
  ApexDataLabels,
  ApexXAxis,
  ApexPlotOptions,
  ApexFill,
  ApexMarkers,
  ApexYAxis,
 ApexLegend,
  ApexTitleSubtitle,
  ApexStroke,
  ApexGrid
} from "ng-apexcharts";

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  dataLabels: ApexDataLabels;
  plotOptions: ApexPlotOptions;
  xaxis: ApexXAxis;
  legend:ApexLegend;
};


export type ChartOptions1 = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  dataLabels: ApexDataLabels;
  grid: ApexGrid;
  fill: ApexFill;
  markers: ApexMarkers;
  yaxis: ApexYAxis;
  stroke: ApexStroke;
  title: ApexTitleSubtitle,
  legend:ApexLegend;
};
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild("chart") chart!: ChartComponent;
  public chartOptions: Partial<ChartOptions>|any;
  @ViewChild("chart1") chart1!: ChartComponent;
  public chartOptions1: Partial<ChartOptions1|any>;
  constructor() {
    this.chartOptions1 = {
      series: [
        {
          name: "",
          data: [4, 3, 10, 9, 29, 19]
        }
      ],
      chart1: {
        height: 350,
        type: "line",
        foreColor: '#6D6D6D'
      },
      stroke: {
        width: 7,
        curve: "smooth"
      },
      xaxis: {
        type: "datetime",
        categories: [
          "01 Jan",
          "02 Jan",
          "03 Jan",
          "04 Jan",
          "05 Jan",
          "06 Jan",
        
          
        ],
        title: {
          text: "Months"}
      },
  
      colors: ['#de7733'],
      fill: {
        
          type: "gradient",
          colors: ['#de7733'],
 
        
    
      },
      markers: {
        size: 4,
        colors: ["#FFA41B"],
        strokeColors: "#aad435",
        strokeWidth: 2,
        hover: {
          size: 7
        }
      },
      yaxis: {
        min: -10,
        max: 40,
        title: {
          text: "Device Count"
        },
        axisBorder: {
          show: true,
        }
      },
      grid: {
        show: false,
        
    },
    
    };
    // this.chartOptions = {
    //   chart: {
    //     type: 'bar'
    //   },
    //   plotOptions: {
    //     bar: {
    //       horizontal: false
    //     }
    //   },
    //   fill: {
    //     type: "gradient",
    //     gradient: {
    //       type:["vertical"],
    //       shadeIntensity: 1,
    //       opacityFrom: 0.7,
    //       opacityTo: 0.9,
    //       colorStops: [
    //         {
    //           offset: 0,
    //           color: "#EB656F",
    //           opacity: 1
    //         },
    //         {
    //           offset: 20,
    //           color: "#FAD375",
    //           opacity: 1
    //         },
    //         {
    //           offset: 60,
    //           color: "#61DBC3",
    //           opacity: 1
    //         },
    //         {
    //           offset: 100,
    //           color: "#95DA74",
    //           opacity: 1
    //         }
    //       ]
    //     }
    //   }
    //   ,
    //   series: [{
    //     data: [
    //       {
    //         x: 'Category B',
    //         y: 98,
    //         fill: {
    //           type: "gradient",
    //           gradient: {
    //             type:["vertical"],
    //             shadeIntensity: 1,
    //             opacityFrom: 0.7,
    //             opacityTo: 0.9,
    //             colorStops: [
    //               {
    //                 offset: 0,
    //                 color: "#EB656F",
    //                 opacity: 1
    //               },
    //               {
    //                 offset: 20,
    //                 color: "#FAD375",
    //                 opacity: 1
    //               },
    //               {
    //                 offset: 60,
    //                 color: "#61DBC3",
    //                 opacity: 1
    //               },
    //               {
    //                 offset: 100,
    //                 color: "#95DA74",
    //                 opacity: 1
    //               }
    //             ]
    //           }
    //         }
          
    //       }, {
    //         x: 'Category B',
    //         y: 23,
    //         fillColor: '#f5843d',
    //         strokeColor: '#C23829'
    //       }, {
    //         x: 'Category B',
    //         y: 13,
    //         fillColor: '#f5843d',
    //         strokeColor: '#C23829'
    //       },
    //       {
    //         x: 'Category B',
    //         y: 28,
    //         fillColor: '#f5843d',
    //         strokeColor: '#C23829'
    //       }, {
    //         x: 'Category B',
    //         y: 33,
    //         fillColor: '#f5843d',
    //         strokeColor: '#C23829'
    //       }, {
    //         x: 'Category B',
    //         y: 13,
    //         fillColor: '#f5843d',
    //         strokeColor: '#C23829'
    //       },
    //       {
    //         x: 'Category B',
    //         y: 43,
    //         fillColor: '#f5843d',
    //         strokeColor: '#C23829'
    //       }, {
    //         x: 'Category B',
    //         y: 33,
    //         fillColor: '#f5843d',
    //         strokeColor: '#C23829'
    //       }, {
    //         x: 'Category B',
    //         y: 81,
    //         fillColor: '#f5843d',
    //         strokeColor: '#C23829'
    //       }
    //     ] 
    //   }]
    // }
    this.chartOptions = {
   
      chart: {
       
        type: "bar",
        foreColor: '#6D6D6D'
      },

      grid: {
        show: false,
        
    }, 
  
     
      series: [
        {
        
          name:"",
          data: [12, 23, 19, 45, 38, 52, 45]
        }
      ],
      fill: {
        type: "gradient",
        colors: ['#de7733', ],
        gradient: {
          type: "vertical",
          shadeIntensity: 1,
          opacityFrom: 0.9,
          opacityTo: 0.9,
          stops: [0,90, 700]
        }
      },
      
      xaxis: {
        title: {
          text: "Months"},

        categories: [
          "01 Jan",
          "02 Jan",
          "03 Jan",
          "04 Jan",
          "05 Jan",
          "06 Jan",
          "07 Jan"
        ]
      }
      ,yaxis: {
        title: {
          text: "User Count"},
          axisBorder: {
            show: true,
          }
      }
    };
}}
