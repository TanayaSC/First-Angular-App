import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  activatedRoute: any;

  constructor() { }
  public Menu: any[];
  ngOnInit(): void {
    this.Menu=[{ }]

    this.activatedRoute.params.subscribe(param => {
      // tslint:disable-next-line: no-string-literal
       this.Menu[param['id']];
      });
     }
  }


