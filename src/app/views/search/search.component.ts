import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { SearchService } from '../../services/search-service/search.service';
import { Router } from '@angular/router';
import { DataService } from '../../services/data-service/data.service';
import { Constants } from '../../constants/constants';

@Component({
  selector: 'app-search',
  templateUrl: 'search.component.html',
  styleUrls: ['search.component.css'],
})
export class SearchComponent implements OnInit {
  form: FormGroup;
  name: string;
  error: string;
  isError: boolean = false;
  isLoading: boolean = false;
  constant = Constants;

  @Input() handle: string;

  public profileData: Array<any> = [];

  constructor(
    public searchService: SearchService,
    private router: Router,
    private dataService: DataService
  ) {}
  ngOnInit() {
    this.profileData = this.dataService.gitHubProfiles;
    this.dataService.activeProfiles = {};
    this.handleScroll();
  }

  handleScroll() {
    window.onscroll = () => this.detectBottom();
  }

  detectBottom() {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
      this.searchHandle({ name: this.name, isNextPage: true });
    }
  }

  onClickProfile(profile) {
    this.dataService.activeProfiles = profile;
    this.dataService.searchKey = this.name;
    this.dataService.gitHubProfiles = this.profileData;
    this.router.navigate(['/profile']);
  }

  async searchHandle(args: any) {
    this.name = args.name;

    await this.searchService.searchGithubUsers(
      args.name,
      this,
      args.isNextPage
    );
  }
}
