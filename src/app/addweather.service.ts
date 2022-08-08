import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { map } from 'rxjs';
@Injectable()
export class AddweatherService {

  input: any = document.getElementsByClassName('city')


  constructor(private http: HttpClient) {}
  ngAdd(event: any) {
    return this.http.get(`https://api.openweathermap.org/data/2.5/forecast?q=${this.input[0].firstChild.value},ru&appid=62e2049673572d819816bd241cb6fda6`)
    .pipe(
      map(data => data['list'])
    )
  }
}
