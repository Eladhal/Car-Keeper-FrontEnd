import { Component, OnInit } from '@angular/core';
import {User} from '../../Classes/User';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

  user: User;

  constructor() { }

  ngOnInit() {
  }

    btnAddUser(){

    }

}
