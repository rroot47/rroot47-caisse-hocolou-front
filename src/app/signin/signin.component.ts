import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {AuthService} from "../services/auth.service";

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  signInForm : FormGroup | any;
  errorMessage: string | any;

  constructor(
    private formBuilder:FormBuilder,
    private  authService:AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.initForm();
  }

  initForm(){
    this.signInForm = this.formBuilder.group({
      email : ['', [Validators.required, Validators.email]],
      password : ['', [Validators.required]]// Validators.pattern(/[0-9a-zA-Z]{6,}/)
    });
  }

  onSubmit(){
    const email = this.signInForm.get('email').value;
    const password = this.signInForm.get('password').value;
    this.authService.signInUser(email, password).subscribe({
      next:(data:any)=>{
        localStorage.setItem("accessToken",data.accessToken);
        //localStorage.setItem("role", data.roles);
        this.router.navigate(['/member']);
      },
      error: err => {

      }
    });
  }
}
