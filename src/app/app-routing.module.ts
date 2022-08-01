import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'one',
    loadChildren: () => import('./one/one.module').then( m => m.OnePageModule)
  },
  {
    path: 'two',
    loadChildren: () => import('./two/two.module').then( m => m.TwoPageModule)
  },
  {
    path: 'three',
    loadChildren: () => import('./three/three.module').then( m => m.ThreePageModule)
  },
  {
    path: 'four',
    loadChildren: () => import('./four/four.module').then( m => m.FourPageModule)
  },
  {
    path: 'five',
    loadChildren: () => import('./five/five.module').then( m => m.FivePageModule)
  },
  {
    path: 'six',
    loadChildren: () => import('./six/six.module').then( m => m.SixPageModule)
  },
  {
    path: 'seven',
    loadChildren: () => import('./seven/seven.module').then( m => m.SevenPageModule)
  },
  {
    path: 'eight',
    loadChildren: () => import('./eight/eight.module').then( m => m.EightPageModule)
  },
  {
    path: 'nine',
    loadChildren: () => import('./nine/nine.module').then( m => m.NinePageModule)
  },
  {
    path: 'ten',
    loadChildren: () => import('./ten/ten.module').then( m => m.TenPageModule)
  },
  {
    path: 'eleven',
    loadChildren: () => import('./eleven/eleven.module').then( m => m.ElevenPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
