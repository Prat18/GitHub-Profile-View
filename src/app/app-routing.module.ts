import { NgModule } from '@angular/core';
import { Routes, RouterModule, CanActivate } from '@angular/router';
import { ProfileViewComponent } from './views/profile/profile-view/profile-view.component';
import { SearchComponent } from './views/search/search.component';
import { ProfileGuardService } from './services/profile-guard-service/profile-guard.service';

const routes: Routes = [
  { path: '', component: SearchComponent },
  {
    path: 'profile',
    component: ProfileViewComponent,
    canActivate: [ProfileGuardService],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
