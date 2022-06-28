import { Component, OnInit } from '@angular/core';
import {ListProduct} from "../model/listProduct";
import {Category} from "../model/category";
import {City} from "../model/city";
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-create-car',
  templateUrl: './create-car.component.html',
  styleUrls: ['./create-car.component.css']
})
export class CreateCarComponent implements OnInit {
  public formValue: FormGroup;
  listCategory: Category[];
  listCity: City[];
  selectedImg: any = null;
  checkImgIn: boolean = false;
  imageThis: any;


  constructor(
  ) {
  }

  ngOnInit(): void {
    this.formValue = new FormGroup({
      categoryId: new FormControl(''),
      name: new FormControl(),
      description: new FormControl(''),
      status: new FormControl(''),
      cityId: new FormControl(''),
      location: new FormControl(''),
      notice: new FormControl(''),
      condition: new FormControl('')
    });
  }

  save() {

  }
}
