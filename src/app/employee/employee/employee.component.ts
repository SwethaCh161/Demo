import { Component, OnInit } from '@angular/core';
import { DataService1, SampleService } from 'src/app/services/sample-service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  fullName = "";
  empObj: any;

  constructor(private _sampleService: SampleService, private _dataService: DataService1) { }

  ngOnInit(): void {
    this.fullName = this._sampleService.getFullName();
    this.empObj = this._dataService.getData();
    console.log(this.empObj);
  }

}
