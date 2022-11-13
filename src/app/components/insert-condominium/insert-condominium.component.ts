import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-insert-condominium',
  templateUrl: './insert-condominium.component.html',
  styleUrls: ['./insert-condominium.component.scss']
})
export class InsertCondominiumComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<InsertCondominiumComponent>,
    @Inject(MAT_DIALOG_DATA) public data: {code: number, name: string},
  ) {}

  code: number = 0;
  name: string = '';

  ngOnInit(): void {
  }

  onCancelClick(): void {
    this.dialogRef.close();
  }
}
