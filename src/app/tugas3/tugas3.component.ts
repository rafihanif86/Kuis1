import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tugas3',
  templateUrl: './tugas3.component.html',
  //styleUrls: ['./tugas3.component.css']
  styles:[`.huruf{color:white;`]
  
})
export class Tugas3Component implements OnInit {
  serverCreated = false;
  array = [];
  count = 0;
  constructor() {
   }

  ngOnInit() {
  }

  onCreationStatus() {
    if(this.serverCreated == false){
      this.serverCreated = true;
    }else if(this.serverCreated == true){
      this.serverCreated =false;
    }
    this.count++;
    this.array.push(this.count);
  }

}
