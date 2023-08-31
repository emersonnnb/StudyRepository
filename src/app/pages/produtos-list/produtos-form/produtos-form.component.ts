import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ProductModel } from 'src/app/core/model/product.model';

@Component({
  selector: 'app-produtos-form',
  templateUrl: './produtos-form.component.html',
  styleUrls: ['./produtos-form.component.scss']
})
export class ProdutosFormComponent implements OnInit {

  mode!: string;
  id!: number;
  formProduto!: FormGroup;
  produto: any;

  constructor(  
    @Inject(MAT_DIALOG_DATA) public data: any,
    private formBuilder: FormBuilder,
    public dialogRef: MatDialogRef<ProdutosFormComponent>,    
  ) { }
  
  ngOnInit(): void {

    console.log(this.data)
    this.produto = [];
    this.mode = this.data.mode;
    this.id = this.data.id;

    this.formProduto = this.formBuilder.group({
      id:[''],
      name:[''],
      price:[''],
      category:[''],      
      stock:[''],      
    });

    switch (this.mode) {
      case 'create':
        this.formProduto.enable();        
        break;

      case 'view':
        this.formProduto.disable();
        //this.getbyidLocale();
        break;

      case 'edit':
        this.formProduto.enable();        
        //this.getbyidLocale();
        break;   
    }
  }

  editProduto() {
    this.mode = 'edit';
    this.formProduto.enable();
  };

  addProduto() {
    console.log(this.produto);
    const values = this.formProduto.value;

    if (this.formProduto.invalid ) {
      this.formProduto.markAllAsTouched();
      return;
    }

    this.produto.push(values);
    localStorage.setItem('BD', JSON.stringify(this.produto));
    console.log(this.produto)
    // this.api.postLocalidade(values).subscribe({
    //   next: () => {
    //     this.formOcorrencia.reset();
    //     this.dialogRef.close();
    //     this.common.showSnack("Dados salvos com sucesso!");
    //   },
    //   error: (error) => {
    //     this.dialogService.alert(error.error?.message)
    //   }
    // });
  };


  exit(): void {  
      this.dialogRef.close();
  }
}
