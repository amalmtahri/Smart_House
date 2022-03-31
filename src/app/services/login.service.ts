import { Injectable } from '@angular/core';
import{ HttpClient} from '@angular/common/http'
import { User } from '../models/user';
import { Router } from '@angular/router';



@Injectable({
  providedIn: 'root'
})
export class LoginService {

  urlAPI='http://localhost:3000/users';

  constructor(private http: HttpClient) { 
    
  }

    login(user:User ) {
      return this.http.get<User[]>(`${this.urlAPI}?email=${user.username}&password=${user.password}`);
    }
  }
