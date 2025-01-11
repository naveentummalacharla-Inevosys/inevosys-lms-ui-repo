import { Routes } from '@angular/router';
import { MainComponent } from './components/main/main.component';
export const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      {
        path: 'component1',
        loadComponent: () =>
          import('./components/component-1/component-1.component').then(
            (c) => c.Component1Component
          ),
      },
      {
        path: 'component2',
        loadComponent: () =>
          import('./components/component-2/component-2.component').then(
            (c) => c.Component2Component
          ),
      },
      {
        path: 'component3',
        loadComponent: () =>
          import('./components/component-3/component-3.component').then(
            (c) => c.Component3Component
          ),
      },
      {
        path: 'component4',
        loadComponent: () =>
          import('./components/component-4/component-4.component').then(
            (c) => c.Component4Component
          ),
      },
    ],
  },
];
