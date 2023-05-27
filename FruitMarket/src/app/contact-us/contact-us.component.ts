import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent {
  profileForm: FormGroup;
  constructor(private fb: FormBuilder) { 
    this.profileForm = this.fb.group({
      firstName: [''],
      lastName: [''],
      gender: [],
      mobile: [],
      email: []
    });
  }
}
