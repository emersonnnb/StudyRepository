import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent {

  form!: FormGroup;
    
  constructor(      
    private formBuilder: FormBuilder,    
    private router: Router 
  ) { }


  ngOnInit(): void {   
    this.form = this.formBuilder.group({      
      user:['',Validators.required],
      password:['',Validators.required],      
    }); 
  }

  save(){
    if (this.form.invalid ) {
      this.form.markAllAsTouched();
      return;
    } 
    console.log(this.form)
    let userName =  this.form.controls['user'].value;
    let password = this.form.controls['password'].value    
  }

}
