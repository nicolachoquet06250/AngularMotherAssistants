import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ma-account-page',
  templateUrl: './account-page.component.html',
  styleUrls: ['./account-page.component.css']
})
export class AccountPageComponent implements OnInit {
  role: string|null = null;

  constructor() { }

  ngOnInit() {
  }

}
