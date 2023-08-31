import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from "@angular/material/table";
import { ProductModel } from 'src/app/core/model/product.model';
import { ProdutosFormComponent } from './produtos-form/produtos-form.component';

const  list: ProductModel[] = [
    {id: 2,  name: "Macarrão", price: 2, category: "Massas", stock: 1},
    {id: 5,  name: "Arroz", price: 2, category: "Cereais", stock: 15},
    {id: 15, name: "Queijo", price: 5, category: "Laticinios",stock: 20},
    {id: 11, name: "Lampada", price: 7, category: "Bazar", stock: 50},
];
@Component({
  selector: 'app-produtos-list',
  templateUrl: './produtos-list.component.html',
  styleUrls: ['./produtos-list.component.scss']
})
export class ProdutosListComponent {

  dataSource = new MatTableDataSource(list);  
  displayedColumns: string[] = [ "id", "name", "price", "category", "stock", "action" ];

  constructor(
    public dialog: MatDialog,    
  ) { };

  openDialog( id: number, mode: string){
    return this.dialog.open(ProdutosFormComponent, {
      width: "25%",
      height: "70vh",      
      data: { id, mode },      
    }).afterClosed().subscribe(() => {
      // this.getLocalidade(this.pageEvent)
      // this.menuIndex = undefined;
    })
  }

}
