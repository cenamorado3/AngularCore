import { Component, OnInit, Inject, OnDestroy } from '@angular/core';
import { FormGroup, FormBuilder, Validators} from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { browser } from 'protractor';

@Component({
  selector: 'custom-component',
  templateUrl: './custom-component.component.html',
  styleUrls: ['./custom-component.component.css']
})

export class CustomComponent implements OnInit, OnDestroy {
  public employee: Employee;
  form: FormGroup
  baseUrl: string
  http: HttpClient;
  constructor(fb: FormBuilder, @Inject('BASE_URL') baseUrl: string, http: HttpClient)
  {
    this.baseUrl = baseUrl;
    this.http = http;
    this.form = fb.group(
      {
        email: ['', Validators.required],
        country: ['', Validators.required],
        jobTitle: ['', Validators.required],
        name: [''],
        phone: ['']
      });
  }

  ngOnInit() {
  }

  ngOnDestroy() {
    document.cookie = "jsonForm=; expires=Thu, 01 Jan 1970 00:00:00 UTC";
    alert("COOKIES!")
  }
  get email() {
    return this.form.get('email');
  }

  get country() {
    return this.form.get('country');
  }

  get jobTitle() {
    return this.form.get('jobTitle');
  }

  get name() {
    return this.form.get('name');
  }

  get phone() {
    return this.form.get('phone');
  }


  onSubmit(form)
  {
    document.cookie = "jsonForm=" + JSON.stringify(form.value);

    console.log(form.value);
    this.http.post<Employee>(this.baseUrl + 'api/Card/NewEmployee', form.value).subscribe(s => {
      this.employee = s;
    }, error => {
      console.error(error);
    })
  }
}


interface Employee {
  email: string;
  country: string;
  jobTitle: string;
  name: string;
  phone: string;
}
