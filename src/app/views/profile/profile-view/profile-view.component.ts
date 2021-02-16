import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { DataService } from '../../../services/data-service/data.service';
import { SearchService } from '../../../services/search-service/search.service';
import { Constants } from '../../../constants/constants';

@Component({
  selector: 'app-profile',
  templateUrl: 'profile-view.component.html',
  styleUrls: ['profile-view.component.css'],
})
export class ProfileViewComponent implements OnInit {
  constant: any = Constants;
  pinnedRepos: any;

  constructor(
    public dataService: DataService,
    public searchService: SearchService
  ) {}

  ngOnInit() {
    this.getPinnedRepos(this.dataService.activeProfiles.handle);
  }

  async getPinnedRepos(username: string) {
    this.pinnedRepos = await this.searchService.getUserPinnedRepos(username);
    console.log(this.pinnedRepos);
  }
}
