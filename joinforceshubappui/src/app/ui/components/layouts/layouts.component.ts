import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {  RouterModule } from '@angular/router';
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
 userPhotoUrl : string = ""
 loginResponse : LoginResponseModel = new LoginResponseModel()
 constructor(
  private _auth : AuthService,
  private _crypto : CryptoService,
 ){
  let loginResponseString = _crypto.decrypto(localStorage.getItem("accessToken").toString())  
  this.loginResponse = JSON.parse(loginResponseString)
  
 }

isAdminUser():boolean {
  return this.isAdmin;
}
logout(){
  this._auth.logout()
}

loadImages(folderPath: string): string {
  const imagePath = `https://localhost:7051/api/Files?path=${folderPath}`;
  return imagePath;
}
}
