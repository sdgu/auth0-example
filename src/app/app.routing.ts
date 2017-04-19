import { Routes, RouterModule} from '@angular/router';

// Import our components
import { PublicDealsComponent } from './public-deals/public-deals.component';
import { PrivateDealsComponent } from './private-deals/private-deals.component';

import { AuthGuard } from "./auth-guard.service";

const appRoutes: Routes = [
  // Add the redirect
  {
    path: '',
    redirectTo: '/deals',
    pathMatch: 'full'
  },
  // Add our routes
  {
    path: 'deals',
    component: PublicDealsComponent
  },
  {
    path: 'special',
    component: PrivateDealsComponent,
    canActivate: [AuthGuard]
  },
  {
    path: "**", redirectTo: "/deals", pathMatch: "full"
  }
];
// Here we are exporting our routes
export const routing = RouterModule.forRoot(appRoutes);
// Here we are combining our routing components into a single array. We will use this a little later when we update our root module
export const routedComponents = [PublicDealsComponent, PrivateDealsComponent];