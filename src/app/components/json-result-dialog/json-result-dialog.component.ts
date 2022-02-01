import { Component, Inject, Input, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Clipboard } from '@angular/cdk/clipboard';
import { DomSanitizer } from '@angular/platform-browser';
import { WidgetModel } from 'src/app/models/widget.model';

@Component({
  selector: 'app-json-result-dialog',
  templateUrl: './json-result-dialog.component.html',
  styleUrls: ['./json-result-dialog.component.css'],
})
export class JsonResultDialogComponent implements OnInit {
  fileUrl: any;

  selectedData: string = this.data.json;
  file: string = 'Screen';
  extension: string = '.json';

  constructor(
    private sanitizer: DomSanitizer,
    public dialogRef: MatDialogRef<JsonResultDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    private clipboard: Clipboard
  ) {}

  ngOnInit(): void {
    this.file = this.data.screenName;
  }

  onClose() {
    this.dialogRef.close();
  }

  onCopy(inputElement: any) {
    this.clipboard.copy(this.selectedData);
  }
  onDownload() {
    const blob = new Blob([this.selectedData], {
      type: 'application/octet-stream',
    });

    this.fileUrl = this.sanitizer.bypassSecurityTrustResourceUrl(
      window.URL.createObjectURL(blob)
    );
    window.URL.createObjectURL(blob);
    this.dialogRef.close();
  }

  onTabChanged(event) {
    console.log(event.index);
    if (event.index === 0) {
      this.file = this.data.screenName;
      this.selectedData = this.data.json;
    } else {
      this.file = this.data.cells[event.index - 1].cellName;
      var map: Map<string, any> = new Map();
      map[this.data.cells[event.index - 1].cellName] =
        this.data.cells[event.index - 1].cell;
      this.selectedData = JSON.stringify(
        {
          response: {
            result: map,
          },
        },
        null,
        4
      );
    }
  }
}

export interface DialogData {
  json: string;
  cells: any[];
  screenName: string;
}
