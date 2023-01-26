import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {UserService} from "../services/user.service";
import {UserInterface, UserModel} from "../models/User.model";
import {Observable, of} from "rxjs";

@Component({
  selector: 'app-membre',
  templateUrl: './membre.component.html',
  styleUrls: ['./membre.component.css']
})
export class MembreComponent implements OnInit {

  userModel:UserModel[]|any = [];
  pageSize:number = 5;
  currentPage:number = 0;
  totalPage:number = 0;

  constructor(private router: Router,private userService : UserService) { }

  ngOnInit(): void {
    this.getAllMembres();
   // this.getPageMembres();
  }

  getAllMembres(){
    return this.userService.getAllMembres().subscribe(data=>{
      this.userModel = data;
    })
  }

 getPageMembres(){
    return this.userService.getPageMembres(this.currentPage,this.pageSize).subscribe((data:any)=>{
      this.userModel = data;
      let index = this.currentPage * this.pageSize;
      let totalPages = ~~this.userModel/this.pageSize;
      //this.membrePage =data;
      if(data.length % this.pageSize!=0)
        totalPages++;
      let membrePages = this.userModel .slice(index, index+this.pageSize);
      console.log(membrePages)
      return of({page:this.currentPage, size:this.pageSize, totalPage:totalPages,membre:membrePages})
    })
  }

}
