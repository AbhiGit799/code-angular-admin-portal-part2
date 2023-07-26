import { Component, OnInit } from '@angular/core';
const feather = require('feather-icons');   //npm i --save-dev @types/feather-icons    



@Component({
  selector: 'app-feather-icon',
  templateUrl: './feather-icon.component.html',
  styleUrls: ['./feather-icon.component.scss']
})
export class FeatherIconComponent implements OnInit {

  constructor() { }
  ngOnInit() {
    feather.replace();
  }   

}
