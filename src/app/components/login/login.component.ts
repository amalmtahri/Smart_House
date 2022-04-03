import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl,FormGroup, Validators } from '@angular/forms';
import { LoginService } from 'src/app/services/login.service';
import { User } from 'src/app/models/user';
import { GlobalConstants } from 'src/app/common/global-constants';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor(private loginService: LoginService,  private router: Router) { }

  ngOnInit(): void {
   
  }
  formGroup = new FormGroup(
    {
      username : new FormControl('',Validators.required),
      password : new FormControl ('',Validators.required),

    }
  )


  login(){
    const user = this.formGroup.value;

    if (user.username && user.password) {
        this.loginService.login({"username":this.formGroup.value, "password":user.password})
            .subscribe(
                (rs:User[]) => {
                  if(rs.length>0){
                    alert("login success ✔️");
                    GlobalConstants.userData = rs[0];
                    GlobalConstants.connected = true;
                    this.router.navigate(['/home']);
                  }else{
                    alert("error login")
                    this.formGroup.reset();
                  }
                }
            );
    }
  }
}
