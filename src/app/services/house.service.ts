import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { House } from '../models/house';


@Injectable({
  providedIn: 'root'
})
export class HouseService {
  apiURL = "http://localhost:3000/house";
  constructor(private http: HttpClient) { }

  getAll()
  {
    return this.http.get<House[]>(this.apiURL);
  }
}
