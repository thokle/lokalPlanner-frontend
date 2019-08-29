import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {RegisteruserService} from '../services/registeruser.service';
import {User} from '../models/user';

@Component({
  selector: 'app-registeruser',
  templateUrl: './registeruser.component.html',
  styleUrls: ['./registeruser.component.scss']
})
export class RegisteruserComponent implements OnInit {

  userForm: FormGroup;
  jobFunction;
  color;
  constructor(private  fb: FormBuilder, private rs: RegisteruserService) {
    this.userForm = fb.group({
      firstname: [],
      lastname: [],
      jobfunction: [],
      username: [],
      email: [],
      password: [],
      repassword : [],
      title: [],
      color: [],
      middlename: [],
      konsulentKode: []
    });
  }

  ngOnInit() {
  }

  public createUser() {
    console.log(this.userForm.controls);
    const user: User = {
    username: this.userForm.controls.username.value
    , email: this.userForm.controls.email.value
    , password: this.userForm.controls.password.value
    , firstname: this.userForm.controls.firstname.value,
    lastname: this.userForm.controls.lastname.value,
    jobfunction: this.jobFunction,
    color: this.userForm.controls.color.value,
    middlename: this.userForm.controls.middlename.value,
      konsulentKode: this.userForm.controls.konsulentKode.value
  };
    this.rs.creteUser(user).subscribe( value => {

    }, error1 => {
      console.log(error1);
    });

  }

}
