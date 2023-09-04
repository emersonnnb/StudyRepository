import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from "@angular/material/table";
import { ProductModel } from 'src/app/core/model/product.model';
import { ProdutosFormComponent } from './produtos-form/produtos-form.component';
import { ProdutoService } from './services/produto.service';
import { HttpParams } from '@angular/common/http';
import { ConfirmationDialogComponent } from 'src/app/shared/components/confirmation-dialog/confirmation-dialog/confirmation-dialog.component';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-produtos-list',
  templateUrl: './produtos-list.component.html',
  styleUrls: ['./produtos-list.component.scss']
})
export class ProdutosListComponent implements OnInit {

  dataSource = new MatTableDataSource<ProductModel>;  
  displayedColumns: string[] = [ "id", "name", "price", "category", "stock", "action" ];

  pageEvent: PageEvent = {
    pageIndex: 0,
    pageSize: 10,
    length: 0,
  };

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(
    public dialog: MatDialog,    
    private api: ProdutoService,
    private _snackBar: MatSnackBar   
  ) { };
  
  ngOnInit(): void {   
    this.getProductslist(this.pageEvent);  
  }

  getProductslist(event: PageEvent){
    console.log(event);

    if (this.pageEvent.pageSize !== event.pageSize){
      event.pageIndex = 0;
    }
    
    this.pageEvent = event;
    let params = new HttpParams()
    .set('_page', this.pageEvent.pageIndex)
    .set('_limit', this.pageEvent.pageSize)

    this.api.getAllProduto(params).subscribe({
      next: (res): void => {         
        this.dataSource = res;
        this.pageEvent.length = res.length;
      }
    })
  }

  deletProduct(produtoId: number) {    
      const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
        data: "Tem certeza que deseja excluir?",
      });  
      dialogRef.afterClosed().subscribe((result: boolean) => {
        if(result){
          this.api.deleteProduto(produtoId).subscribe({
            next: () => {
              this.getProductslist(this.pageEvent);
              this._snackBar.open("Dados salvos com sucesso!!", '', {duration: 2000});
            },
            error: (error) => {
              console.log(error)
            }
          })    
        }
      });
  };

  openDialog( id?: number, mode?: string){
    return this.dialog.open(ProdutosFormComponent, {
      width: "25%",
      height: "55vh",      
      data: { id, mode },      
    }).afterClosed().subscribe(() => {
      this.getProductslist(this.pageEvent);  
    })
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

}
