import { Component, OnInit } from '@angular/core';
import {NavigationStart, Router} from "@angular/router";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  //subscription: Subscription;
  isAuth : boolean = false;

  constructor(private router: Router) {
    /*this.subscription = router.events.subscribe((event) => {
      if(localStorage.getItem('accessToken')){
        if (event instanceof NavigationStart) {
          this.isAuth = true
        }
      }
      this.isAuth = false;
    });*/
  }

  ngOnInit(): void {
  }

}
