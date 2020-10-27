import { Component, OnInit } from '@angular/core';
import { Chart } from '../../../../../../node_modules/chart.js';

@Component({
  selector: 'app-graficas-compradores',
  templateUrl: './graficas-compradores.component.html',
  styleUrls: ['./graficas-compradores.component.scss']
})
export class GraficasCompradoresComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    var myChart = new Chart("compras", {
      type: 'pie',
      data: {
          labels: ['Exitosas', 'Canceladas'],
          datasets: [{
              label: 'Piezas vendidas',
              data: [12, 19],
              backgroundColor: [
                  'rgba(255, 99, 132, 0.2)',
                  'rgba(54, 162, 235, 0.2)',
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
