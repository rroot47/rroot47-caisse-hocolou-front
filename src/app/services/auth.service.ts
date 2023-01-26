import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../environments/environment";
import {Router} from "@angular/router";
import {SignupModels} from "../models/signup.models";

@Injectable({
  providedIn: 'root'
})
export class AuthService{

  constructor(private http: HttpClient, private router: Router){}

  signInUser(email:string, password:string ):Observable<SignupModels>{
    let body = {email:email, password:password}
    return  this.http.post(environment.backendHost+"/auth/signin", body);
  }

  getRoles(id:number){
    return this.http.get(environment.backendHost+"/hc/role/"+id);
  }

}
