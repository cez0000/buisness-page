import {Component, Inject, ViewEncapsulation} from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA, MatDialogRef, MatDialogModule} from '@angular/material/dialog';
import {NgIf} from '@angular/common';
import {MatButtonModule} from '@angular/material/button';
import {FormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';



@Component({
    selector: 'app-image',
    template: `<div class="image2-wrapper"><img width="100%" [src]="data.src"></div>`,
    imports: [
        MatFormFieldModule,
        MatInputModule,
        FormsModule,
        MatButtonModule,
        MatDialogModule,
      ],
      styles: [`
       .image2-wrapper {
       display: flex;
       justify-content: center;
       background-color: transparent !important;
       }
       .mat-mdc-dialog-container .mdc-dialog__surface {
        background-color: transparent !important;
       }
      `],
    standalone: true,
    encapsulation: ViewEncapsulation.None
  })
  export class ImageShowUpComponent {
    constructor(
        @Inject(MAT_DIALOG_DATA) public data: {src:string}
    ) {}

  }