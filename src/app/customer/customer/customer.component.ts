import { Component, OnInit } from '@angular/core';
import { SampleService } from 'src/app/services/sample-service';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

  fullName = "";

  constructor(private _sampleService: SampleService) { }

  ngOnInit(): void {
    this.fullName = this._sampleService.getFullName();
  }

}
