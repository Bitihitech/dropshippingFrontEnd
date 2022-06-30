import {Component, OnInit} from '@angular/core';
import {TokenStorageService} from "../../login/token-storage.service";
import {ShareService} from "../../common/service/share.service";
import {Router} from "@angular/router";
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  username: string;
  role: string;
  isLoggedIn: boolean = false;

  constructor(private tokenStorageService: TokenStorageService,
              private router: Router,
              private toast:ToastrService,
              private shareService: ShareService) {
    this.shareService.getClickEvent().subscribe(value => {
      this.loadHeader();
    })
  }

  ngOnInit(): void {
    this.loadHeader();
    console.log(this.username)

  }

  loadHeader(): void {
    if (this.tokenStorageService.getToken()) {
      this.role = this.tokenStorageService.getUser().authorities[0];
      this.username = this.tokenStorageService.getUser().name;
    }
    this.isLoggedIn = this.username != null;
  }

  logOut() {
    this.isLoggedIn = false;
    this.toast.warning("Logout user" + this.username,"Logout success!" )
    this.tokenStorageService.signOut();

  }
}
