import { Component, Inject, Input, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Clipboard } from '@angular/cdk/clipboard';

@Component({
  selector: 'app-json-result-dialog',
  templateUrl: './json-result-dialog.component.html',
  styleUrls: ['./json-result-dialog.component.css'],
})
export class JsonResultDialogComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<JsonResultDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    private clipboard: Clipboard
  ) {}

  ngOnInit(): void {}

  onClose() {
    this.dialogRef.close();
  }

  onCopy(inputElement: any) {
    this.clipboard.copy(this.data.json);
  }
}

export interface DialogData {
  json: string;
}
