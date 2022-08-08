import { Component, OnInit } from '@angular/core';
import { AddweatherService } from '../addweather.service'

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss'],
  providers: [AddweatherService]
})
export class WeatherComponent implements OnInit {

  city = ''
  icon: any;
  name: string = '';
  // arrTemp = [];
  // arrTime = [];
  // arrWeathers = [];
  // arrWind = [];
  // arrIcon = [];
  obj = [];
  // end = [];

  constructor(public http: AddweatherService) {}

  onAdd(event: any) {
    this.city = this.http.input[0].firstChild.value;
    this.http.ngAdd(event)
    .subscribe((data)=>{
      this.obj = [];
      let arrIcon = [];
      let end = [];
      let arrTemp = [];
      let arrTime = [];
      let arrWeathers = [];
      let arrWind = [];

      for (var i=0; i<data.length; i+=8){
        arrTemp.push((data[i]['main']['temp']).toFixed(0))
        arrWeathers.push(data[i]['weather']);
        arrWind.push(data[i]['wind']['speed']);
        arrTime.push(data[i]['dt_txt'])
      }
      for (let j=0; j<arrWeathers.length; j++) {
        arrIcon.push(arrWeathers[j][0]['icon'])
      }
      for(let i =0; i<arrTemp.length; i++)
      this.obj[i]= end.concat(arrTime[i], arrIcon[i], arrWind[i], arrTemp[i])
      console.log(this.obj)
    })
    document.getElementsByClassName('city')[0].innerHTML = '';
    document.getElementsByClassName('add')[0].innerHTML = '';
  }

  ngOnInit(): void {
  }

}
