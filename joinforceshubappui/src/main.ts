import { RouterModule } from '@angular/router';
import { AppComponent } from './app/app.component';
import { importProvidersFrom } from '@angular/core';
import { BrowserModule, bootstrapApplication } from '@angular/platform-browser';

bootstrapApplication(AppComponent, {
  providers: [
    importProvidersFrom(
      BrowserModule,
      RouterModule.forRoot([
        {
          path: '',
          loadComponent: () =>
            import('./app/ui/components/layouts/layouts.component').then(
              (c) => c.LayoutsComponent
            ),
          children: [
            {
              path: '',
              loadComponent: () =>
                import('./app/ui/components/default/home/home.component').then(
                  (c) => c.HomeComponent
                ),
            },
            {
              path: 'advertisement',
              loadComponent: () =>
                import('./app/ui/components/default/advertisement/advertisement.component').then(
                  (c) => c.AdvertisementComponent
                ),
            },
          ],
        },
        {
          path: 'login',
          loadComponent :() => import('./app/ui/components/auth/login/login.component').then(c=> c.LoginComponent)
        }
      ])
    ),
  ],
});
