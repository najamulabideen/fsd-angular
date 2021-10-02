import {
  Component,
  OnInit
} from '@angular/core';
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

  constructor(private formBuilder: FormBuilder) {}

  checkoutForm = this.formBuilder.group({
    name: '',
    address: ''
  });

  loginForm = this.formBuilder.group({
    username: ['', [Validators.required]],
    password: ['', [Validators.required, Validators.minLength(6)]],
  });

  ngOnInit(): void {}

  submit() {
    alert('Logged in successfully!');
  }

}
