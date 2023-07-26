import { Component, Input, OnInit } from '@angular/core';
const feather = require('feather-icons');   //npm i --save-dev @types/feather-icons  

@Component({
  selector: 'app-custom-feather',
  templateUrl: './custom-feather.component.html',
  styleUrls: ['./custom-feather.component.scss']
})
export class CustomFeatherComponent implements OnInit {

  @Input('icon') feathericon:any;  //Aliasing syntax.   //Generic Code style

  constructor() { }
  ngOnInit() {
    
  }   

  ngAfterViewInit()
  {
    feather.replace();
  }

}
