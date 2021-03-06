import {Component, OnInit} from '@angular/core';
import {AuthService} from '../services/auth.service';
import {TokenService} from '../services/token.service';
import {User} from '../models/user';
import {Router} from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.less']
})
export class AdminComponent implements OnInit {

  constructor(private authService: AuthService) {
  }

  ngOnInit(): void {
  }

  public doLogout() {
    this.authService.logout();
  }
}
