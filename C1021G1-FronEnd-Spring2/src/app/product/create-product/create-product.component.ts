import {Component, Inject, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {CarService} from "../car.service";
import {Router} from "@angular/router";
import {finalize} from "rxjs/operators";
import {AngularFireStorage} from "@angular/fire/storage";
import {Category} from "../model/category";
import {Province} from "../model/province";
import {Nationality} from "../model/nationality";
import {City} from "../model/city";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']
})
export class CreateProductComponent implements OnInit {

  public formValue: FormGroup;
  listCategory: Category;
  listCity: City;
  listProvince: Province;
  listNationality: Nationality;
  selectedImg: any;
  checkImgIn: boolean = false;
  loadImg:boolean=false
  imageThis: any;
  loadingGetProvince : boolean = true;
  loadingGetCity : boolean = true;
  plate: string ='';
  urlFile:string;
  sourceImgIn : string;
  loading: boolean = false;
  fileEvent: any;


  constructor(
    private carService: CarService,
    private router: Router,
    private snackBar: MatSnackBar,
    @Inject(AngularFireStorage) private storage: AngularFireStorage
  ) {
  }

  ngOnInit(): void {

    this.formValue = new FormGroup({
      categoryId: new FormControl(''),
      name: new FormControl(''),
      description: new FormControl(''),
      status: new FormControl(''),
      cityId: new FormControl(''),
      location: new FormControl(''),
      notice: new FormControl(''),
      condition: new FormControl(''),
      thumbnail: new FormControl('')
    });
    this.carService.getAllCategory().subscribe(data => {
      console.log(this.listCategory)
      this.listCategory = data;

    })
    this.carService.getAllnationality().subscribe(value => {
      this.listNationality = value;
    })


  }


  idProvince: number =0
  getProvinceById(e) {
    this.idProvince = e.value
    this.loadingGetProvince =false;
    this.carService.getProvince(this.idProvince).subscribe(data => {
      this.loadingGetProvince = false;
      this.listProvince = data;
    })
  }
  idCity: number =0
  getCityById(f) {
    this.idCity = f.value
    this.loadingGetCity = false;
    this.carService.getCity(this.idCity).subscribe(data => {
      this.loadingGetCity = false;
      this.listCity = data;
      console.log(data)
    })
  }

  showPreview(event: any) {
    this.fileEvent = event
    this.loadImg=true;

    this.selectedImg = event.target.files[0];

    if (event.target.files) {

        const reader = new FileReader();
        reader.readAsDataURL(event.target.files[0])
        reader.onload = (event: any) => {
          this.loadImg=false
          this.imageThis = event.target.result;
          this.checkImgIn = true;
        };
      }
      // reader.readAsDataURL(event.target.files[0]);
  }

  save() {
    // upload image to firebase
    for (let i = 0; i <this.fileEvent.target.files.length; i++){
      const nameImg = this.fileEvent.target.files[i].name;
      // const nameImg = this.getCurrentDateTime() + this.selectedImage.name;
      const fileRef = this.storage.ref(nameImg);
      this.loadImg=true;
      this.storage.upload(nameImg, this.fileEvent.target.files[i]).snapshotChanges().pipe(
        finalize(() => {
          fileRef.getDownloadURL().subscribe((url) => {
            this.loadImg = false;
            console.log('url la')
            this.urlFile = url;
            console.log(url)
            this.formValue.get('thumbnail').patchValue(url)
            console.log(this.formValue.value)
            this.carService.save(this.formValue.value).subscribe(data =>{
              this.snackBar.open('Thêm mới thành công', 'OK')
              console.log(data)
            })
          });
        })
      ).subscribe();
    }
  }
}
