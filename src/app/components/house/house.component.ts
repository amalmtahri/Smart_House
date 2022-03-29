import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { House } from 'src/app/models/house';
import { HouseService } from 'src/app/services/house.service';
import { DialogComponent } from '../dialog/dialog.component'; 


@Component({
  selector: 'app-house',
  templateUrl: './house.component.html',
  styleUrls: ['./house.component.css']
})
export class HouseComponent implements OnInit {
  houses: House[] = [];
  resultHouses: House[] = [];
  constructor(public dialog: MatDialog, private houseService: HouseService) { }

  ngOnInit(): void {
    this.getAll();
  }
  openDialog(): void {
   this.dialog.open(DialogComponent, {
      width: '30%',
    });
  }

  getAll()
  {
    this.houseService.getAll().subscribe(data => this.resultHouses = this.houses = data );
    console.log(this.houses);
  }

}
