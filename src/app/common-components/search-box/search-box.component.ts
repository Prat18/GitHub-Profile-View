import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Constants } from '../../constants/constants';

@Component({
  selector: 'app-search-box',
  templateUrl: 'search-box.component.html',
  styleUrls: ['search-box.component.css'],
})
export class SearchBoxComponent implements OnInit {
  constant: any = Constants;
  form: FormGroup;

  @Output() searchEvent = new EventEmitter<{
    name: string;
    isNextPage: Boolean;
  }>();

  constructor() {}

  ngOnInit() {
    this.form = new FormGroup({
      handle: new FormControl(null, {
        validators: [Validators.required, Validators.minLength(1)],
      }),
    });
  }

  onSearchHandle() {
    if (this.form.valid) {
      this.searchEvent.emit({
        name: this.form.value.handle,
        isNextPage: false,
      });
    }
  }
}
