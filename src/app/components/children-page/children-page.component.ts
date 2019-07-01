import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ma-children-page-component',
  templateUrl: './children-page.component.html',
  styleUrls: ['./children-page.component.css']
})
export class ChildrenPageComponent implements OnInit {
  role: string|null = null;

  constructor() { }

  ngOnInit() {
  }

}
