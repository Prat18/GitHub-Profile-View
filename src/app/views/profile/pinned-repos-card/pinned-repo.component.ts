import { Component, Input, OnInit } from '@angular/core';
import { Constants } from '../../../constants/constants';

@Component({
  selector: 'app-pinned-repo',
  templateUrl: 'pinned-repo.component.html',
  styleUrls: ['pinned-repo.component.css'],
})
export class PinnedRepos implements OnInit {
  constant: any = Constants;

  @Input() pinnedRepo: any;
  constructor() {}

  ngOnInit() {}
}
