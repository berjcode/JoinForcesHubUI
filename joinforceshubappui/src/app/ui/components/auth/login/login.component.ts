import { ToastrType } from './../../../../services/toastr.service';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, NgForm } from '@angular/forms';
import { ValidInputDirective } from '../../../../common/valid-input.directive';
import { AuthService } from '../services/auth.service';
import { ToastrService } from '../../../../services/toastr.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule,RouterModule,FormsModule,ValidInputDirective],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  constructor(
    private _auth : AuthService
  ){
  
  }


  login(form:NgForm){
    if(form.valid){
     this._auth.login(form.value);
    }
  }
}
