import {Component, OnInit} from '@angular/core';
import {Subscription} from "rxjs";
import {NavigationStart, Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  isAuth : boolean | any;
  subscription: Subscription | any;
  constructor(private router : Router) {
  this.subscription = router.events.subscribe((event) =>{
    if(localStorage.getItem("accessToken")!=null){
      if(event instanceof NavigationStart)
        this.isAuth = true
    }else{
      this.isAuth = false;
    }

    })
  }




  ngOnInit(): void {
  }

  onSignOut() {
    localStorage.removeItem("accessToken")
    this.router.navigate(['/home']);
  }
}
