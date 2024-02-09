import { RouterModule } from '@angular/router';
import { AppComponent } from './app/app.component';
import { importProvidersFrom } from '@angular/core';
import { BrowserModule, bootstrapApplication } from '@angular/platform-browser';
import { AuthGuard } from './app/ui/components/auth/guards/auth.guard';
import { provideHttpClient } from '@angular/common/http';

bootstrapApplication(AppComponent, {
  providers: [
    provideHttpClient(),
    importProvidersFrom(
      BrowserModule,
      RouterModule.forRoot([
        {
          path: '',
          loadComponent: () =>
            import('./app/ui/components/layouts/layouts.component').then(
              (c) => c.LayoutsComponent
            ),
            canActivateChild: [AuthGuard],
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
            }, {
              path: 'userprofile',
              loadComponent: () =>
                import('./app/ui/components/default/userprofile/userprofile.component').then(
                  (c) => c.UserprofileComponent
                ),
            },
            {
              path: 'createteam',
              loadComponent: () =>
                import('./app/ui/components/default/createteam/createteam.component').then(
                  (c) => c.CreateteamComponent
                ),
            },
            {
              path: 'createandjointeam',
              loadComponent: () =>
                import('./app/ui/components/default/createandjointeam/createandjointeam.component').then(
                  (c) => c.CreateandjointeamComponent
                ),
            },
            {
              path: 'teams',
              loadComponent: () =>
                import('./app/ui/components/default/teams/teams.component').then(
                  (c) => c.TeamsComponent
                ),
            },
            {
              path: 'applications',
              loadComponent: () =>
                import('./app/ui/components/default/applications/applications.component').then(
                  (c) => c.ApplicationsComponent
                ),
            },
            {
              path: 'userreport',
              loadComponent: () =>
                import('./app/ui/components/default/userreport/userreport.component').then(
                  (c) => c.UserreportComponent
                ),
            },
            {
              path: 'changepassword',
              loadComponent: () =>
                import('./app/ui/components/default/changepassword/changepassword.component').then(
                  (c) => c.ChangepasswordComponent
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
