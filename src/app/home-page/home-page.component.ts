import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ma-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  role: string|null = null;

  constructor() { }

  ngOnInit() {}

}
