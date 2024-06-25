import { Routes } from '@angular/router';
import { Test01Component } from './component/test01/test01.component';
import { Test02Component } from './component/test02/test02.component';
import { Test03Component } from './component/test03/test03.component';

export const routes: Routes = [
    {path: 'app-test01', component: Test01Component },
    {path: 'app-test02', component: Test02Component },
    {path: 'app-test03', component: Test03Component },

];
