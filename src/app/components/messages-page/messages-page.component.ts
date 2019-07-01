import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ma-messages-page',
  templateUrl: './messages-page.component.html',
  styleUrls: ['./messages-page.component.css']
})
export class MessagesPageComponent implements OnInit {
  role: string|null = null;

  constructor() { }

  ngOnInit() {
  }

}
