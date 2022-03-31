import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { House } from 'src/app/models/house';
import { HouseService } from 'src/app/services/house.service';
import { DialogComponent } from '../dialog/dialog.component'; 
import Swal from 'sweetalert2';
import { Status } from 'src/app/enums/status';
import { DeviceService } from 'src/app/services/device.service';
import { Device } from 'src/app/models/device';



@Component({
  selector: 'app-house',
  templateUrl: './smartHouse.component.html',
  styleUrls: ['./smartHouse.component.css']
})
export class HouseComponent implements OnInit {
  devices: Device[] = [];
  resultDevices: Device[] = [];
  on : Status = Status.ON;
  off : Status = Status.OFF;


 

  constructor(public dialog: MatDialog, private deviceService: DeviceService) { }

  ngOnInit(): void {
    this.getAll();
  }
  openDialog(): void {
   this.dialog.open(DialogComponent, {
      width: '30%',
    });
  }

  changeStatus(device: Device){
    console.log(device);
    if(device.status === this.on){
      device.status = Status.OFF;
      this.deviceService.updateDevice(device)
      .subscribe((Response:Device)=>{
       this.getAll();
      })
    }
    else{
      device.status = Status.ON;
      this.deviceService.updateDevice(device)
      .subscribe((Response:Device)=>{
       this.getAll();
      })
    }
  }

  confirmBox(device: Device) {
    Swal.fire({
      title: 'Are you sure want to remove?',
      icon: 'info',
      showCancelButton: true,
      confirmButtonText: '<i class="fa fa-thumbs-up"></i> Great!',
      cancelButtonText: '<i class="fa fa-thumbs-down"></i>'
    }).then((result:any) => {
      if (result.value) {
        Swal.fire(
          'Deleted!',
          'Your imaginary file has been deleted.',
          'success'
        )
        this.deleteHouse(device.id);
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire(
          'Cancelled',
        )
      }
    })
  }



  getAll()
  {
    this.deviceService.getAll().subscribe(data => this.resultDevices = this.devices = data );
    console.log(this.resultDevices);
  }

  deleteHouse(id:any)
  {
    this.deviceService.delete(id).subscribe(() => 
    this.resultDevices = this.devices = this.devices.filter(data => data.id != id));
  }

  // addHouse() {
  //   this.houseService.addHouse(this.myHouse).subscribe((house) => {
  //     this.resultHouses = this.houses = [house, ...this.houses];
  //     this.resteHouse();
  //   })
  // }
  // resteHouse() {
  //   this.myHouse = {
  //     'label': '',
  //     'completed': false
  //   }
  // }
 
}
