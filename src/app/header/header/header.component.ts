import { Component, OnInit } from '@angular/core';


// declare var $:any;

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})



export class HeaderComponent implements OnInit {



  display = false;

  constructor() {

  }

  ngOnInit() {
    // this.teste ();
  }

    teste () {
      // console.log('display', this.display);
      // this.display = ! this.display;
      // $('.button-collapse').sideNav();
      // $('.mobile-demo').sideNav();
    }
}
