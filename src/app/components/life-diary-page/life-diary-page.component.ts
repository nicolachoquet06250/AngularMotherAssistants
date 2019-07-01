import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ma-life-diary-page',
  templateUrl: './life-diary-page.component.html',
  styleUrls: ['./life-diary-page.component.css']
})
export class LifeDiaryPageComponent implements OnInit {
  role: string|null = null;

  constructor() { }

  ngOnInit() {
  }

}
