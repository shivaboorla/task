import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  addForm!: FormGroup;
  //addEditForm: boolean = false;
  addEditForm = true;//for form validation
  title = 'angular-task';
  data: any;
  // time = {hour: 13, minute: 30};
  model! : NgbDateStruct;

  constructor(private formBuilder: FormBuilder,) { }

  ngOnInit() {
    this.addForm = this.formBuilder.group({
        fname : ['', Validators.required],
        lname : ['', Validators.required],
        state : ['', Validators.required],
        city : ['', Validators.required],
        phone : ['', Validators.required],
        address : ['', Validators.required],
        email : ['', Validators.required],
        zcode : ['', Validators.required],
        date : ['', Validators.required],
        time : ['', Validators.required],
        dealer : ['', Validators.required],
        home : ['', Validators.required],
        location : ['', Validators.required],
    })
    this.addValidForm();
    }
    get rf(){ return this.addForm.controls}

    addValidForm(){
      this.addEditForm = true;
      this.data = this.addForm.value;
      let formData ={
        fname: this.data.fname,
        lname : this.data.lname,
        state : this.data.state,
        city :  this.data.city,
        phone : this.data.phone,
        address : this.data.address,
        email : this.data.email,
        zcode : this.data.zcode,
        date: this.data.date,
        time: this.data.time,
        dealer: this.data.dealer,
        home: this.data.home,
        location: this.data.location,
      }
      console.log(formData, 'form data');
      
    }
}
