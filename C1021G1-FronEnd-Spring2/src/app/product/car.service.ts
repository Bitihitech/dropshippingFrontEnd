import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CarService {

  private readonly URL = 'http://localhost:8080/api/product'
  private readonly URL4 = 'http://localhost:8080/api/profile'
  private readonly URLI = 'http://localhost:8080/api/categories'
  private readonly URLI1 = 'http://localhost:8080/api/cities'
  private readonly URLI2 = 'http://localhost:8080/api/province'
  private readonly URLI3 = 'http://localhost:8080/api/nationality'

  constructor(
    private httpClient: HttpClient
  ) {
  }

  getAllProduct() {
    const token = sessionStorage.getItem('token');
    const header = {
      'content-type': 'application/json',
      'Authorization': `Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJuaGF0aGlldTEiLCJpYXQiOjE2NTYzMTMyODAsImV4cCI6MTY1Njc0NTI4MH0.VOKCsRAD8WxHJWymTP9YGEVSbL8im7-Bt1_Tad636AEI1pDWXRFp4FnqR3U82Tnt4YVpMYO4TQduuCXm3I-L_w`
    };
    return this.httpClient.get(this.URL, {headers: header});
  }
  getAllCategory() {
    const token = sessionStorage.getItem('token');
    const header = {
      'content-type': 'application/json',
      'Authorization': `Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJuaGF0aGlldTEiLCJpYXQiOjE2NTYzMTMyODAsImV4cCI6MTY1Njc0NTI4MH0.VOKCsRAD8WxHJWymTP9YGEVSbL8im7-Bt1_Tad636AEI1pDWXRFp4FnqR3U82Tnt4YVpMYO4TQduuCXm3I-L_w`
    };
    return this.httpClient.get(this.URLI, {headers: header});
  }
  getAllCity() {
    const token = sessionStorage.getItem('token');
    const header = {
      'content-type': 'application/json',
      'Authorization': `Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJuaGF0aGlldTEiLCJpYXQiOjE2NTYzMTMyODAsImV4cCI6MTY1Njc0NTI4MH0.VOKCsRAD8WxHJWymTP9YGEVSbL8im7-Bt1_Tad636AEI1pDWXRFp4FnqR3U82Tnt4YVpMYO4TQduuCXm3I-L_w`
    };
    return this.httpClient.get(this.URLI1, {headers: header});
  }
  getAllProvice() {
    const token = sessionStorage.getItem('token');
    const header = {
      'content-type': 'application/json',
      'Authorization': `Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJuaGF0aGlldTEiLCJpYXQiOjE2NTYzMTMyODAsImV4cCI6MTY1Njc0NTI4MH0.VOKCsRAD8WxHJWymTP9YGEVSbL8im7-Bt1_Tad636AEI1pDWXRFp4FnqR3U82Tnt4YVpMYO4TQduuCXm3I-L_w`
    };
    return this.httpClient.get(this.URLI2, {headers: header});
  }
  getAllnationality() {
    const token = sessionStorage.getItem('token');
    const header = {
      'content-type': 'application/json',
      'Authorization': `Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJuaGF0aGlldTEiLCJpYXQiOjE2NTYzMTMyODAsImV4cCI6MTY1Njc0NTI4MH0.VOKCsRAD8WxHJWymTP9YGEVSbL8im7-Bt1_Tad636AEI1pDWXRFp4FnqR3U82Tnt4YVpMYO4TQduuCXm3I-L_w`
    };
    return this.httpClient.get(this.URLI3, {headers: header});
  }

  getProvince(id : number) {
    const token = sessionStorage.getItem('token');
    const header = {
      'content-type': 'application/json',
      'Authorization': `Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJuaGF0aGlldTEiLCJpYXQiOjE2NTYzMTMyODAsImV4cCI6MTY1Njc0NTI4MH0.VOKCsRAD8WxHJWymTP9YGEVSbL8im7-Bt1_Tad636AEI1pDWXRFp4FnqR3U82Tnt4YVpMYO4TQduuCXm3I-L_w`
    };
    return this.httpClient.get(this.URLI2 + '/' + id, {headers: header});
  }

  getCity(id : number) {
    const token = sessionStorage.getItem('token');
    const header = {
      'content-type': 'application/json',
      'Authorization': `Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJuaGF0aGlldTEiLCJpYXQiOjE2NTYzMTMyODAsImV4cCI6MTY1Njc0NTI4MH0.VOKCsRAD8WxHJWymTP9YGEVSbL8im7-Bt1_Tad636AEI1pDWXRFp4FnqR3U82Tnt4YVpMYO4TQduuCXm3I-L_w`
    };
    return this.httpClient.get(this.URLI1 + '/' + id, {headers: header});
  }

  save(product){
    const token = sessionStorage.getItem('token');
    const header = {
      'content-type': 'application/json',
      'Authorization': `Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJuaGF0aGlldTEiLCJpYXQiOjE2NTYzMTMyODAsImV4cCI6MTY1Njc0NTI4MH0.VOKCsRAD8WxHJWymTP9YGEVSbL8im7-Bt1_Tad636AEI1pDWXRFp4FnqR3U82Tnt4YVpMYO4TQduuCXm3I-L_w`
    };
    return this.httpClient.post(this.URL , product, {headers: header})
  }

  getAllProductSimilar(id: number) {
    const token = sessionStorage.getItem('token');
    const header = {
      'content-type': 'application/json',
      'Authorization': `Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJuaGF0aGlldTEiLCJpYXQiOjE2NTYzMTMyODAsImV4cCI6MTY1Njc0NTI4MH0.VOKCsRAD8WxHJWymTP9YGEVSbL8im7-Bt1_Tad636AEI1pDWXRFp4FnqR3U82Tnt4YVpMYO4TQduuCXm3I-L_w`
    };
    return this.httpClient.get(this.URL + '/similar/' + id, {headers: header});
  }

  getProfile(id: number) {
    const token = sessionStorage.getItem('token');
    const header = {
      'content-type': 'application/json',
      'Authorization': `Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJuaGF0aGlldTEiLCJpYXQiOjE2NTYzMTMyODAsImV4cCI6MTY1Njc0NTI4MH0.VOKCsRAD8WxHJWymTP9YGEVSbL8im7-Bt1_Tad636AEI1pDWXRFp4FnqR3U82Tnt4YVpMYO4TQduuCXm3I-L_w`
    };
    return this.httpClient.get(this.URL4 + '/' + id, {headers: header});
  }

  findById(id: number) {
    const token = sessionStorage.getItem('token');
    const header = {
      'content-type': 'application/json',
      'Authorization': `Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJuaGF0aGlldTEiLCJpYXQiOjE2NTYzMTMyODAsImV4cCI6MTY1Njc0NTI4MH0.VOKCsRAD8WxHJWymTP9YGEVSbL8im7-Bt1_Tad636AEI1pDWXRFp4FnqR3U82Tnt4YVpMYO4TQduuCXm3I-L_w`
    };
    return this.httpClient.get(this.URL + '/' + id,{headers: header})
  }
}
