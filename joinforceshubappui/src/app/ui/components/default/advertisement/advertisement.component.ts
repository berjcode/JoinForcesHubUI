import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdvertisementDetailComponent } from "../advertisement-detail/advertisement-detail.component";

@Component({
    selector: 'app-advertisement',
    standalone: true,
    templateUrl: './advertisement.component.html',
    styleUrl: './advertisement.component.css',
    imports: [CommonModule, AdvertisementDetailComponent]
})
export class AdvertisementComponent {

}
