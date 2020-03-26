import { Component, OnInit, ViewChild } from '@angular/core';
import { PageTitleComponent } from "../../extra/page-title/page-title.component";
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { AddVehicleComponent } from "../../extra/add-vehicle/add-vehicle.component";
export interface UserData {
  id: string;
  model: string;
  year: number;
  mileage: number;
  next_service: string;
  issue: number;
  feature: [{ charge: string; range: string; battery: string; UVO: string; refreshed: string; }];
  name: string;
  color: string;
}

/** Constants used to fill up our data base. */
const COLORS: string[] = [
  'maroon', 'red', 'orange', 'yellow', 'olive', 'green', 'purple', 'fuchsia', 'lime', 'teal',
  'aqua', 'blue', 'navy', 'black', 'gray'
];
const DATA:any = [
  {
    id: '00121SES',
    model: 'NITRO',
    image:'https://cdntdreditorials.azureedge.net/cache/5/1/5/8/8/2/5158821b1a9143d23b74b71aa7b935929b140b2a.jpg',
    year: 2019,
    mileage: 62121,
    next_service: '23221',
    issue: 3,
    feature: [{ charge: '31', range: '71', battery: 'pluged in', UVO: 'Connected', refreshed: '20' }],
    name: 'my ride',
    color: 'red',
  }
];

/**
 * @title Data table with sorting, pagination, and filtering.
 */

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  card_title: string = 'My Vehicle List';
  displayedColumns: string[] = ['id', 'image','model','name', 'color', 'year', 'mileage', 'next_service', 'issue', 'feature', 'action'];
  dataSource: MatTableDataSource<UserData>;

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  constructor(
    private dialog:MatDialog
  ) {

    // Assign the data to the data source for the table to render
    this.dataSource = new MatTableDataSource(DATA);
  }

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  addVehicle(){
     let addVahicle = this.dialog.open(AddVehicleComponent, {
       width:'500px'       
     })
     addVahicle.afterClosed().subscribe(result=>{
       console.log("Add vehicle Result :",result)
     });
  }

}

