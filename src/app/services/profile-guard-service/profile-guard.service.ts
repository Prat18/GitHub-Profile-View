import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { DataService } from '../data-service/data.service';

@Injectable()
export class ProfileGuardService implements CanActivate {
  constructor(public dataService: DataService, public router: Router) {}
  canActivate(): boolean {
    if (!this.dataService.activeProfiles.name) {
      this.router.navigate(['/']);
      return false;
    }
    return true;
  }
}
