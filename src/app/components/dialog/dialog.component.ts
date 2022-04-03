import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Device } from 'src/app/models/device';
import { Floor } from 'src/app/models/floor';
import { Room } from 'src/app/models/room';
import { DeviceService } from 'src/app/services/device.service';
import { FloorService } from 'src/app/services/floor.service';
import { RoomService } from 'src/app/services/room.service';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {

  floors: Floor[] = [];
  // resultFloors: Floor[] = [];
  close : boolean = false;

  rooms: Room[] = [];
  // resultRooms: Room[] = [];

  myNewDevice: Device={

  }


  constructor(private deviceService: DeviceService, private floorService: FloorService, private roomService: RoomService, private router: Router) { }

  ngOnInit(): void {
    this.getAllFloors();
    this.getAllRooms();
  }


  addDevice(){
    this.deviceService.addDevice(this.myNewDevice)
    .subscribe((Response:Device)=>{
            this.clearInput();
            this.close = true;
          
        });
}

getAllFloors()
{
  this.roomService.getAll().subscribe(data => this.rooms = data );
  console.log(this.rooms);

}


getAllRooms()
{
  this.floorService.getAll().subscribe(data => this.floors = data );
  console.log(this.floors);
}

clearInput(){
  this.myNewDevice ={
  
  }
}  


}
