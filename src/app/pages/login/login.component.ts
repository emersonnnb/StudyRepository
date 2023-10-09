import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  form!: FormGroup;
  login= 'emerson';
  senha: number = 123;
  
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

  onSubmit(){
    if (this.form.invalid ) {
      this.form.markAllAsTouched();
      return;
    } 
    console.log(this.form)

    let userName =  this.form.controls['user'].value;
    let password = this.form.controls['password'].value

    if(userName != this.login){
      this.form.controls['user'].setErrors({'incorrect': true});            
    }

    if(password != this.login){      
      this.form.controls['password'].setErrors({'incorrect': true});            
    }
    

    if (userName == this.login && password  == this.senha ){

      localStorage.setItem(userName, password);
      this.router.navigate(['/dashboard']);     

    }else{
      return
    }
    console.log(this.form.value)
  }

  createLogin(){
    this.router.navigate(['/signup']);    
  }

}
