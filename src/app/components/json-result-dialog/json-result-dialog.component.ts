import { Component, Inject, Input, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Clipboard } from '@angular/cdk/clipboard';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-json-result-dialog',
  templateUrl: './json-result-dialog.component.html',
  styleUrls: ['./json-result-dialog.component.css'],
})
export class JsonResultDialogComponent implements OnInit {
  fileUrl:any;

  constructor(
    private sanitizer: DomSanitizer,
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
  onDownload(){
    const blob = new Blob([this.data.json], { type: 'application/octet-stream' });

    this.fileUrl = this.sanitizer.bypassSecurityTrustResourceUrl(window.URL.createObjectURL(blob));
    (window.URL.createObjectURL(blob));
    this.dialogRef.close();
  }
}

export interface DialogData {
  json: string;
}
