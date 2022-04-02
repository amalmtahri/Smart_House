import { Component, OnInit } from '@angular/core';
import { GlobalConstants } from 'src/app/common/global-constants';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private router: Router) { }

  connected : boolean = false;

  ngOnInit(): void {
    this.verifConnection();
    console.log(GlobalConstants.connected);
    console.log(GlobalConstants.userData);
    
  }

  verifConnection()
  {
   if(GlobalConstants.connected){
     this.connected = true;
   }
   else{
    this.connected = false;
   }
  }

  logout()
  {
    GlobalConstants.connected = false;
    this.router.navigate(['/login']);
  }

}
