import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
// import {HttpRequestService} from './http-request.service';

@Component({
  selector: 'ma-menu',
  // tslint:disable-next-line:no-inputs-metadata-property
  inputs: [ 'selected', 'role' ],
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  selected: string|null = null;
  role: string|null = null;
  logged = true;
  constructor(private router: Router/*private http: HttpRequestService*/) {}

  ngOnInit() {
    // this.http.request('').subscribe(() => {});
  }

}
