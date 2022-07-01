import { Component, OnInit } from '@angular/core';
import {CarService} from "./car.service";
import {MatDialog} from "@angular/material/dialog";
import {MatSnackBar} from "@angular/material/snack-bar";
import {ListProductSimilarComponent} from "./list-product-similar/list-product-similar.component";

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
    private snackBar: MatSnackBar

  ) { }

  ngOnInit(): void {
    this.carService.getAllProduct().subscribe(data => {


      this.productList = data

      console.log(this.productList)

    })
  }

  save() {

  }

}
