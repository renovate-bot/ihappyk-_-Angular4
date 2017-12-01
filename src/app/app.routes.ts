import { NgModule } from '@angular/core';
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

/*Import each features that was developed */
import { PingComponent } from './features/ping/ping.component';
import { WsfeedsComponent } from './features/wsfeeds/wsfeeds.component';

/* Define the Routes that you need */
export const routes: Routes = [
    { path : '',
      redirectTo : '/ping',
      pathMatch : 'full' },
    { path : 'ping', component: PingComponent },
    { path : 'wsfeeds', component: WsfeedsComponent },
  ];

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule]
  })
export class AppRoutingModule { }