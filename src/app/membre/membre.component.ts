import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {UserService} from "../services/user.service";
import {UserModel} from "../models/User.model";

@Component({
  selector: 'app-membre',
  templateUrl: './membre.component.html',
  styleUrls: ['./membre.component.css']
})
export class MembreComponent implements OnInit {

  userModel:UserModel[]|any = [];

  constructor(private router: Router,private userService : UserService) { }

  ngOnInit(): void {
    this.getAllMembres();
  }

  onSignOut() {
    localStorage.removeItem("accessToken")
    this.router.navigate(['/home']);
  }

  getAllMembres(){
    return this.userService.getAllMembres().subscribe(data=>{
      this.userModel = data;
      console.log(this.userModel)
    })
  }
}
