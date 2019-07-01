import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ma-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.css']
})
export class RegisterPageComponent implements OnInit {
  role: string|null = null;

  ngOnInit() {}

}
