import {Component, Inject, OnInit} from '@angular/core';
import {CarService} from "../car.service";
import {MatSnackBar} from "@angular/material/snack-bar";
import {ActivatedRoute, ParamMap, Router} from "@angular/router";

@Component({
  selector: 'app-list-product-similar',
  templateUrl: './list-product-similar.component.html',
  styleUrls: ['./list-product-similar.component.css']
})
export class ListProductSimilarComponent implements OnInit {
  productLists: any;
  productId: any;
  totalProductRecord: number;
  totalProduct: number;
  p: number;
  indexPagination: number = 0;
  totalPagination: number;
  id: any;

  constructor(
    private carService: CarService,
    private snackBar: MatSnackBar,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {
  }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      this.id = +paramMap.get('id');
    });
    this.carService.getAllProductSimilar(this.id).subscribe((data) => {
      console.log(data)
      this.productLists = data;
      this.snackBar.open('Chuyển trang thành công', 'OK')
    })


  }

}
