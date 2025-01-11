import { Routes } from '@angular/router';
import { loadRemoteModule } from '@angular-architects/module-federation';
import { authGuard } from '../../../shared/src/lib/main_authentication/auth.guard';
export const routes: Routes = [
{
  path:'',
  pathMatch:'full',
  redirectTo:'login'
},
  {
    path: 'login',
    loadComponent: () =>
      loadRemoteModule({
        type: 'module',
        remoteEntry: 'http://localhost:2000/remoteEntry.js',
        exposedModule: './Component', 
      })
        .then((m) => m.AppComponent) 
        .catch((err) => console.error('Error loading remote component', err)),
  },
  {
    path: 'inventory',
    canActivate:[authGuard ],
    loadComponent: () =>
      loadRemoteModule({
        type: 'module',
        remoteEntry: 'http://localhost:4200/remoteEntry.js',
        exposedModule: './Component', 
      })
        .then((m) => m.AppComponent) 
        .catch((err) => console.error('Error loading remote component', err)),
  },
 
];
