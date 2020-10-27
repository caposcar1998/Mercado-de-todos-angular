import { Component, OnInit } from '@angular/core';
import { Chart } from '../../../../../../node_modules/chart.js';
@Component({
  selector: 'app-graficas-vendedor',
  templateUrl: './graficas-vendedor.component.html',
  styleUrls: ['./graficas-vendedor.component.scss']
})
export class GraficasVendedorComponent implements OnInit {

  public chart: any = null;

  constructor() { }

  ngOnInit(): void {


    var myChart = new Chart("productosMasVendidos", {
        type: 'bar',
        data: {
            labels: ['Frijoles', 'Arroz', 'Jitomates'],
            datasets: [{
                label: 'Cantidad vendida',
                data: [12, 19, 3],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                ],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            }
        }
    });

  } 

}
