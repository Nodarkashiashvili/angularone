import { Routes } from '@angular/router';
import { Home1Component } from './home1/home1.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { ErorComponent } from './eror/eror.component';
import { BookedComponent } from './booked/booked.component';
///eager routing ეიგერ როუტინგი
// export const routes: Routes = [
//     {
//         path : '',
//         redirectTo:'home',
//         pathMatch : 'full'

//     },
//     {
//         path:'home',
//         component : Home1Component

//     },
//     {
//         path:'about',
//         component : AboutComponent
//     },
//     {
//         path : 'contact',
//         component: ContactComponent
//     },
//     {path : 'booked',
//         component : BookedComponent
//     },
//     {
//         path: '**',
//         component : ErorComponent
//     },
// ];







// ეს არის ლეიზი ლოადინგი
export const routes: Routes = [
    {
        path : '',
        redirectTo:'home',
        pathMatch : 'full'

    },
    {
        path:'home',
        loadComponent:() => import('./home1/home1.component').then(v => v.Home1Component)


        
    },
     {
        path:'about',
        loadComponent:() => import('./about/about.component').then(v => v.AboutComponent)


        
    },
     {
        path:'contact',
        loadComponent:() => import('./contact/contact.component').then(v => v.ContactComponent)


        
    },
     {
        path:'booked',
        loadComponent:() => import('./booked/booked.component').then(v =>  v.BookedComponent)


        
    },
    {
        path:'detalis/:id/:name',
        loadComponent:() => import('./home1/detalis/detalis.component').then(v => v.DetalisComponent)


        
    },
    {
        path: '**',
        component : ErorComponent
    },
];