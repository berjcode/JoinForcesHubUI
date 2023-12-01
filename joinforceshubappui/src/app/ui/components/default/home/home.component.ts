import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { AdvertisementDetailComponent } from "../advertisement-detail/advertisement-detail.component";
import { AdvertisementComponent } from "../advertisement/advertisement.component";

@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrl: './home.component.css',
    imports: [CommonModule, AdvertisementDetailComponent, AdvertisementComponent]
})
export class HomeComponent {

  constructor(private router :Router){}

  navigateToDetails(){
      this.router.navigate(['/advertisementDetail']);
  }
}
