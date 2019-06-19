import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ma-contact-page',
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.css']
})
export class ContactPageComponent implements OnInit {
  role: string|null = null;

  constructor() { }

  ngOnInit() {
  }

}
