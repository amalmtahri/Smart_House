import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Floor } from '../models/floor';
import { Room } from '../models/room';

@Injectable({
  providedIn: 'root'
})
export class RoomService {

  apiURL = "http://localhost:3000/rooms";

  constructor(private http: HttpClient) { }

   //getALL Rooms
   getAll()
   {
     return this.http.get<Room[]>(this.apiURL);
   }
}
