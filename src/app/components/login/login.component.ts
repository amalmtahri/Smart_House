import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import {HttpClientModule ,HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public loginForm!: FormGroup
  constructor(private formBuilder : FormBuilder, private http : HttpClient, private router: Router) { }

  ngOnInit(): void {
    this.formBuilder.group({
      userName:[''],
      password:['']
    })
  }
  login(){
    this.http.get<any>("http://localhost:3000/house")
    .subscribe(res=>{
      const user = res.find((a:any)=>{
        return a.userName === this.loginForm.value.userName && a.password === this.loginForm.value.password
      });
      if(user){
        alert("Login Success");
        this.loginForm.reset();
        this.router.navigate(['smarthouse'])
      }else{
        alert("user not found")
      }
    },err=>{
      alert("Something went wrong!!")
    }
    )
  }

}
