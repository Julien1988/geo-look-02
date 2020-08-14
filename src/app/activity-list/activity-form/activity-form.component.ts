import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-activity-form',
  templateUrl: './activity-form.component.html',
  styleUrls: ['./activity-form.component.scss'],
})
export class ActivityFormComponent implements OnInit {
  constructor(private formBuilder: FormBuilder) {}

  // https://angular.io/guide/reactive-forms
  activityForm = this.formBuilder.group({
    ActivityTitle: ['', Validators.required],
    ActivityDescription: ['', Validators.required],
    ActivityLocalisation: ['', Validators.required],
    ActivityDate: ['', Validators.required],
    ActivityType: ['', Validators.required],
  });

  ngOnInit(): void {}

  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.activityForm.value);
  }
}
