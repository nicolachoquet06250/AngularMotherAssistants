import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ma-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {
  role: string|null = null;

  constructor() { }

  ngOnInit() {}

}
