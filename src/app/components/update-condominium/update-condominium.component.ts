import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-update-condominium',
  templateUrl: './update-condominium.component.html',
  styleUrls: ['./update-condominium.component.scss']
})
export class UpdateCondominiumComponent implements OnInit {

  ngOnInit(): void {
    this.code = this.data.code;
    this.name = this.data.name;
  }

  code: number = 0;
  name: string = '';

  constructor(
    public dialogRef: MatDialogRef<UpdateCondominiumComponent>,
    @Inject(MAT_DIALOG_DATA) public data: {code: number, name: string},
  ) {}

  onCancelClick(): void {
    this.dialogRef.close();
  }

}
