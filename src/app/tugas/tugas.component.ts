import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tugas',
  templateUrl: './tugas.component.html',
  styleUrls: ['./tugas.component.css']
})
export class TugasComponent implements OnInit {
  allowLogin = false;
  loginStatus = 'Anda Belum Login, Loginlah...';
  username = '';
  allowButton = false;
  constructor() { 
     // () => {} adalah arrow function atau lamda --> fitur ES6 javascript
     setTimeout(()=> {
       this.allowLogin = true;
    }, 2000)
  }

  ngOnInit() {
  }

  onLogin() {
    this.loginStatus = 'Selamat datang ' + this.username;
    this.username = '';
  }

  checkUsername(){
    if(this.username == ''){
      return this.allowButton = true;
    }
  }

  // onUpdateServerName(event: Event) {
  //   this.serverName = (<HTMLInputElement>event.target).value;
  // }

}
