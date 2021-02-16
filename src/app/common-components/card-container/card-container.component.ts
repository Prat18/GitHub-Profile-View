import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card-container',
  templateUrl: 'card-container.component.html',
  styleUrls: ['card-container.component.css']
})
export class CardContainerComponent implements OnInit {
  constructor() {}

  @Input() profile: any;

  public handle: string;
  public name: string;
  public bio: string;
  public img: string;

  ngOnInit() {
    this.handle = this.profile.handle;
    this.name = this.profile.name;
    this.bio = this.profile.bio;
    this.img = this.profile.img;
  }
}
