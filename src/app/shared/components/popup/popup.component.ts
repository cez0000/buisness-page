import {Component, Inject, ViewEncapsulation} from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA, MatDialogRef, MatDialogModule} from '@angular/material/dialog';
import {NgIf} from '@angular/common';
import {MatButtonModule} from '@angular/material/button';
import {FormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';



@Component({
    selector: 'app-popup',
    templateUrl: './popup.component.html',
    styleUrls: ['./popup.component.scss'],
    standalone: true,
    imports: [
        MatFormFieldModule,
        MatInputModule,
        FormsModule,
        MatButtonModule,
        NgIf,
        MatDialogModule,
      ],
      encapsulation: ViewEncapsulation.None
  })
  export class PopupComponent {
    constructor(
        @Inject(MAT_DIALOG_DATA) public data: {title:string, content:string}
    ) {}

  }