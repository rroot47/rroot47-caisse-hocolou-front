import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../environments/environment";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class AuthService{

  constructor(private http: HttpClient, private router: Router){}

  signInUser(email:string, password:string ):Observable<any>{
    let body = {email:email, password:password}
    return  this.http.post(environment.backendHost+"/auth/signin", body);;
    //return await firebase.auth().signInWithEmailAndPassword(email, password);
  }

  signOutUser() {
    return  sessionStorage.removeItem("accessToken")
  }

}
