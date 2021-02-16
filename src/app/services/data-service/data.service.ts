import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class DataService {
  public gitHubProfiles: any = [];
  public activeProfiles: any = {};
  public searchKey: string;
}
