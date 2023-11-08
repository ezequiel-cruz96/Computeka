import { Component, } from '@angular/core';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent {

  ngOnInit(){
    window.location.href = 'https://login-computeka.auth.us-east-1.amazoncognito.com/login?client_id=5tnqsh2oo2o7doaaucp0ck0hb2&response_type=code&scope=email+openid+phone&redirect_uri=https%3A%2F%2Fmaster.d5q7nvhferkcm.amplifyapp.com%2F';  // Reemplaza con la URL deseada
  }

}
