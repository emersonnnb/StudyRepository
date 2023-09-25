import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ConfirmationDialogComponent } from '../components/confirmation-dialog/confirmation-dialog/confirmation-dialog.component';

@Component({
  selector: 'app-dialog-service',
  templateUrl: './dialog-service.component.html',  
})
export class DialogServiceComponent {

  constructor(
    public dialogRef: MatDialogRef<ConfirmationDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: string,
  ) {}

ngOnInit():void{

}
  onConfirm(): void {
    this.dialogRef.close();
  }  

}
