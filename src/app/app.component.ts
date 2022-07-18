import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  text = ''
  price = ''
  date: any;
  arrEnd: any = [];
  arrCard: any = [];
  all = 0

  title: any = document.getElementsByClassName('model');
  carPrice: any = document.getElementsByClassName('price');
  carText: any = document.getElementsByClassName('text');
  car = '';

  onAdd(event: any) {
    this.car = this.title[0].firstChild.value;
    this.title[0].firstChild.value = '';
  }
  addPoint(event: any) {
    let arr = [];
    arr[0] = this.carText[0].firstChild.value;
    arr[1] = this.carPrice[0].firstChild.value;
    this.date = new Date().toLocaleDateString();
    arr[2] = this.date;
    this.arrEnd.push(arr);
    this.carText[0].firstChild.value = '';
    this.carPrice[0].firstChild.value = '';
    this.all = 0;
    this.arrEnd.forEach((data:any)=>{this.all +=+data[1]})
  }
  remove(id: number) {
    this.arrEnd.splice(id, 1);
    this.all = 0;
    if(this.arrEnd.length !== 0) {
      this.arrEnd.forEach((data: any) =>{
      this.all +=+data[1]});
    } else {
      this.all = 0;
    }

  }
  onSave(event: any) {
    localStorage.setItem("sum", JSON.stringify(this.all))
    localStorage.setItem("key",JSON.stringify(this.arrEnd));
    localStorage.setItem('car', JSON.stringify(this.car));
  }
  ngOnInit() {
    let sum: any = localStorage.getItem("sum")
    let item: any = localStorage.getItem("key");
    let name: any = localStorage.getItem('car');
    this.car = JSON.parse(name);
    if(JSON.parse(item) !==null) {
      this.arrEnd = JSON.parse(item);
      this.all = JSON.parse(sum)
    } else {
      this.all = 0;
      this.arrEnd = [];
    }
  }
}
