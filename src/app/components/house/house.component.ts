import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { House } from 'src/app/models/house';
import { HouseService } from 'src/app/services/house.service';
import { DialogComponent } from '../dialog/dialog.component'; 
import Swal from 'sweetalert2';
import { Status } from 'src/app/enums/status';



@Component({
  selector: 'app-house',
  templateUrl: './house.component.html',
  styleUrls: ['./house.component.css']
})
export class HouseComponent implements OnInit {
  houses: House[] = [];
  resultHouses: House[] = [];
  on : Status = Status.ON;
  off : Status = Status.OFF;

  constructor(public dialog: MatDialog, private houseService: HouseService) { }

  ngOnInit(): void {
    this.getAll();
  }
  openDialog(): void {
   this.dialog.open(DialogComponent, {
      width: '30%',
    });
  }

  confirmBox(house: House) {
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
        this.deleteHouse(house.id);
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire(
          'Cancelled',
         
        )
      }
    })
  }



  getAll()
  {
    this.houseService.getAll().subscribe(data => this.resultHouses = this.houses = data );
    console.log(this.resultHouses);
  }

  deleteHouse(id:any)
  {
    this.houseService.delete(id).subscribe(() => 
    this.resultHouses = this.houses = this.houses.filter(data => data.id != id));
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
