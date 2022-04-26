import { Component, OnInit } from '@angular/core';
import { Serie } from './serie';
import {dataSeries} from './dataSeries';
import {SerieService} from './serie.service'

@Component({
  selector: 'app-serie',
  templateUrl: './serie.component.html',
  styleUrls: ['./serie.component.scss']
})
export class SerieComponent implements OnInit {
  series: Array<Serie>=[];
  average: number =0;
  constructor(private serieService: SerieService) { }
  getSeries(){
    this.serieService.getSeries().subscribe(series => {
      this.series= series;
    });
    }
  getSeasonsAverage(){
    let sum: number = 0;
    this.serieService.getSeries().subscribe(series => {
      this.series= series;
      this.series.forEach((serie) => sum = sum + serie.seasons);
    let numSeries:number= this.series.length;
    this.average=sum/numSeries;
    });

  }

  ngOnInit() {
    this.getSeries();
    this.getSeasonsAverage();
  }

}
