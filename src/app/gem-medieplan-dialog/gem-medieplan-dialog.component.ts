import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-gem-medieplan-dialog',
  templateUrl: './gem-medieplan-dialog.component.html',
  styleUrls: ['./gem-medieplan-dialog.component.scss']
})
export class GemMedieplanDialogComponent implements OnInit {

  public  form: FormGroup;
  constructor(public dialogRef: MatDialogRef<GemMedieplanDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data, private fb: FormBuilder) {
    this.form = this.fb.group({
      navn: ['', [Validators.min(3), Validators.maxLength(40)]],
      beskrivelse: [''],
      type: []

    });
  }

  ngOnInit() {
  }

  gem() {
    if (this.form.valid) {
      this.dialogRef.close({ 'overskrift': this.form.controls.navn.value,
        'beskrivelse' : this.form.controls.beskrivelse.value,
        'type': this.form.controls.type.value   });
    }
  }

}
