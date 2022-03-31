import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Floor } from '../models/floor';

@Injectable({
  providedIn: 'root'
})
export class FloorService {

  apiURL = "http://localhost:3000/floors";

  constructor(private http: HttpClient) { }

   //getALL Floors
   getAll()
   {
     return this.http.get<Floor[]>(this.apiURL);
   }
}
