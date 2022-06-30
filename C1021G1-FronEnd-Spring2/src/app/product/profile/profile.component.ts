import { Component, OnInit } from '@angular/core';
import {CarService} from "../car.service";
import {MatSnackBar} from "@angular/material/snack-bar";
import {ActivatedRoute, ParamMap, Router} from "@angular/router";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  profileList: any;
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

  ) { }


  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      this.id = +paramMap.get('id');
      this.carService.getProfile(this.id).subscribe(data => {
        console.log(data)
        this.profileList = data;
        console.log(this.profileList)
      })
    });

  }

}
