import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-membre',
  templateUrl: './membre.component.html',
  styleUrls: ['./membre.component.css']
})
export class MembreComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onSignOut() {
    localStorage.removeItem("accessToken")
    this.router.navigate(['/home']);
  }
}
