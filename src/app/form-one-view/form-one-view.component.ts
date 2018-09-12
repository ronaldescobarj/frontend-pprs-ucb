import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-one-view',
  templateUrl: './form-one-view.component.html',
  styleUrls: ['./form-one-view.component.css']
})
export class FormOneViewComponent implements OnInit {

  subtotal1: number;
  subtotal21: number;
  subtotal22: number;
  subtotal3: number;
  subtotal4: number;
  subtotal5: number;
  generalTotal: number;

  constructor() { }

  ngOnInit() {
  }

}
