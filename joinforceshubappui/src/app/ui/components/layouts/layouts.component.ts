import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { LoginResponseModel } from '../auth/models/login-response.model';
import { CryptoService } from '../../../services/crypto.service';
import { AuthService } from '../auth/services/auth.service';

@Component({
  selector: 'app-layouts',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './layouts.component.html',
  styleUrl: './layouts.component.css'
})
export class LayoutsComponent {
 isAdmin = false;
 private isMenuOpen = true;
 loginResponse : LoginResponseModel = new LoginResponseModel()
 constructor(
  private _crypto : CryptoService,
  private _auth : AuthService
 ){
  let loginResponseString = _crypto.decrypto(localStorage.getItem("accessToken").toString())  
  this.loginResponse = JSON.parse(loginResponseString)
  console.log(this.loginResponse)
 }

isAdminUser():boolean {
  return this.isAdmin;
}
logout(){
  this._auth.logout()
}

}
