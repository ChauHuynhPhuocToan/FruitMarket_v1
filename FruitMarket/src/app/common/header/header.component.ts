import { Component, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { LoginComponent } from '../../login/login.component';
import { LoginService } from '../../services/login.service';
import { User } from '../../interfaces/Ilogin';
import { EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { LoadingService } from 'src/app/services/loading.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  loadingEnable: boolean = false;
  sidenavEnable = false;
  user: User = { mobileNumber: '' };

  @Output()
  sidenav = new EventEmitter();

  toggelSidenav() {
    this.sidenav.emit('toggel');
  }

  constructor(public dialog: MatDialog, private router: Router, 
    public loginService: LoginService,
    public loadingService: LoadingService) { }


  ngOnInit() {
    this.loginService.loggedIn.subscribe(next => {
      this.user = next;
    });
    this.loadingService.progressEnable.subscribe(next => {
      this.loadingEnable = next;
    });
  }


  enableSidenav() {
    this.sidenavEnable = !this.sidenavEnable;
  }
  openLoginDialog(): void {
    const dialogRef = this.dialog.open(LoginComponent, {

    });

  }
  logout() {
    this.user = { mobileNumber: '' };

    this.loginService.loggedIn.next(this.user);
    this.router.navigate(['home']);
  }
}
