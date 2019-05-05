import { Component, OnInit } from '@angular/core';
import {UserService} from '../common/user/user.service';
import {UserModel} from '../common/user/user.model';

@Component({
  selector: 'app-helpdesk',
  templateUrl: './helpdesk.component.html',
  styleUrls: ['./helpdesk.component.scss']
})
export class HelpdeskComponent implements OnInit {

  public user: UserModel;

  constructor(
    private readonly userService: UserService
  ) { }

  ngOnInit() {
    this.userService.getCurrentUser()
      .subscribe(user => {
        this.user = user;
      });
  }
}