import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-delete-condominium',
  templateUrl: './delete-condominium.component.html',
  styleUrls: ['./delete-condominium.component.scss']
})
export class DeleteCondominiumComponent implements OnInit {

  ngOnInit(): void {
  }

  constructor(
    public dialogRef: MatDialogRef<DeleteCondominiumComponent>,
    @Inject(MAT_DIALOG_DATA) public data: {code: number},
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

}
