import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {User} from '../models/user';

@Component({
  selector: 'app-redirect',
  templateUrl: './redirect.component.html',
  styleUrls: ['./redirect.component.css']
})
export class RedirectComponent implements OnInit {

  constructor(private  router:  Router) {
    const user: User = JSON.parse(localStorage.getItem('user')) || null;

    if ( user ) {
      this.router.navigateByUrl('dashboard');
    } else {
      this.router.navigateByUrl('/login');
    }
  }

  ngOnInit() {
  }

}
