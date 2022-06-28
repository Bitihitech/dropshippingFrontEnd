import { Component, OnInit } from '@angular/core';
import {type} from "../car/model/type";
import {CarService} from "./car.service";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  productList: any;
  totalProductRecord: number;
  totalProduct: number;
  p: number;
  indexPagination: number = 0;
  totalPagination: number;

  constructor(
    private carService: CarService,

  ) { }

  ngOnInit(): void {
    this.carService.getAllProduct().subscribe(data => {
      console.log(data)


      this.productList = data

      // console.log(this.productList)

    })
  }

  save() {

  }
}
