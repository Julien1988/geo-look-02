import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-activity-form',
  templateUrl: './activity-form.component.html',
  styleUrls: ['./activity-form.component.scss'],
})
export class ActivityFormComponent implements OnInit {
  constructor() {}
  activityForm = new FormGroup({
    ActivityTitle: new FormControl(''),
    ActivityDescription: new FormControl(''),
    ActivityDate: new FormControl(''),
    ActivityType: new FormControl(''),
  });

  ngOnInit(): void {}

  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.activityForm.value);
  }
}
