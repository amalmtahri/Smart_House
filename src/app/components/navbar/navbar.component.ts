import { Component, OnInit } from '@angular/core';
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
   
    
  }

 

  logout()
  {
    this.router.navigate(['/login']);
  }

}
