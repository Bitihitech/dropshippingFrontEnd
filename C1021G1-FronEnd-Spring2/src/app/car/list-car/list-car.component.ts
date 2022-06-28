import { Component, OnInit } from '@angular/core';
import {CarService} from "../car.service";
import {FormBuilder, FormGroup} from "@angular/forms";
import {Product} from "../model/product";
import {CommonModule} from "@angular/common";
import {type} from "../model/type";

@Component({
  selector: 'app-list-car',
  templateUrl: './list-car.component.html',
  styleUrls: ['./list-car.component.css']
})
export class ListCarComponent implements OnInit {
  public mySentences:type[] = [
    {id: 1, text: 'Sentence 1'},
    {id: 2, text: 'Sentence 2'},
    {id: 3, text: 'Sentence 3'},
    {id: 4, text: 'Sentence 4'},
  ];

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


      // this.productList = data

      // console.log(this.productList)

    })
  }

  save() {

  }
}
