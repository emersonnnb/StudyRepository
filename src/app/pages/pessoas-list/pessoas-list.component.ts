import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-pessoas-list',
  templateUrl: './pessoas-list.component.html',
  styleUrls: ['./pessoas-list.component.scss']
})
export class PessoasListComponent implements OnInit {
  
  formPessoa!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,    
  ) { }

  ngOnInit(): void {
    this.createForm();         
  }

  private createForm() {
    this.formPessoa = this.formBuilder.group({
      name: [''],
      dtNascimento: [''],
      sexo: [''],
      cep: [''],
      address: [''],
      numero: [''],
      complement: [''],
      telephone: [''],
      
    });
  }    

}
