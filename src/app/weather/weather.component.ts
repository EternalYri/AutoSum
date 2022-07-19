import { Component, OnInit } from '@angular/core';
import { AddweatherService } from '../addweather.service'

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})
export class WeatherComponent implements OnInit {

  city = ''
  icon: any;
  name: string = '';
  arrTemp = [];
  arrTime = [];
  arrWeathers = [];
  arrWind = [];
  arrIcon = [];
  obj = [];
  end = [];

  constructor(public http: AddweatherService) {}

  onAdd(event: any) {
    this.city = this.http.input[0].firstChild.value;
    this.http.ngAdd(event)
    .subscribe((data)=>{
      this.obj = [];
      this.arrIcon = [];
      this.end = [];
      this.arrTemp = [];
      this.arrTime = [];
      this.arrWeathers = [];
      this.arrWind = [];

      for (var i=0; i<data.length; i+=8){
        this.arrTemp.push((data[i]['main']['temp']).toFixed(0))
        this.arrWeathers.push(data[i]['weather']);
        this.arrWind.push(data[i]['wind']['speed']);
        this.arrTime.push(data[i]['dt_txt'])
      }
      for (let j=0; j<this.arrWeathers.length; j++) {
        this.arrIcon.push(this.arrWeathers[j][0]['icon'])
      }
      for(let i =0; i<this.arrTemp.length; i++)
      this.obj[i]= this.end.concat(this.arrTime[i], this.arrIcon[i], this.arrWind[i], this.arrTemp[i])
      console.log(this.obj)
    })
    document.getElementsByClassName('city')[0].innerHTML = '';
    document.getElementsByClassName('add')[0].innerHTML = '';
  }

  ngOnInit(): void {
  }

}
