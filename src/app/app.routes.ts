import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', loadComponent: () => import('./pages/home/home').then(m => m.Home) },
  { path: 'features', loadComponent: () => import('./pages/features/features').then(m => m.Features) },
  { path: 'pricing', loadComponent: () => import('./pages/pricing/pricing').then(m => m.Pricing) },
  { path: 'about', loadComponent: () => import('./pages/about/about').then(m => m.About) },
  { path: 'contact', loadComponent: () => import('./pages/contact/contact').then(m => m.Contact) },
  { path: 'blog', loadComponent: () => import('./pages/blog/blog').then(m => m.Blog) }
];
