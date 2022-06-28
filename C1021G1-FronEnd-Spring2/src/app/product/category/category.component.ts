import { Component, OnInit } from '@angular/core';
import {CarService} from "../../car/car.service";
import {Category} from "../../car/model/category";

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  term: any;
  p: any;
  listCategory: any;
  constructor(
    private carService: CarService,
  ) { }

  ngOnInit(): void {
    this.carService.getAllCategory().subscribe(data => {
      this.listCategory = data;
      console.log(this.listCategory)
    })
  }

}
