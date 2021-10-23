import {
  Component,
  OnInit
} from '@angular/core';
import { TestingService } from '../services/testing.service';

import {
  FormBuilder,
  Validators
} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  constructor(private formBuilder: FormBuilder, private testService: TestingService) {}

  checkoutForm = this.formBuilder.group({
    name: '',
    address: ''
  });

  loginForm = this.formBuilder.group({
    username: ['', [Validators.required]],
    password: ['', [Validators.required, Validators.minLength(6)]],
  });

  loginForModel: any;

  ngOnInit(): void {
    this.getData();
  };

  getData() {
    this.loginForModel = this.testService.getData();
  }

  submit() {
    var variable;
    variable = this.testService.postData('Logged in successfully!');
    console.log(variable);
  }

}
