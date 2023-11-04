import { Component } from '@angular/core';
import {Router} from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(
    private router: Router,
  ){

  }

  ngOnInit(){
    window.location.href = 'https://login-computeka.auth.us-east-1.amazoncognito.com/login?client_id=5tnqsh2oo2o7doaaucp0ck0hb2&response_type=code&scope=email+openid+phone&redirect_uri=https%3A%2F%2Fmaster.dk70uxqxl3ho2.amplifyapp.com%2F';  // Reemplaza con la URL deseada
  }
}