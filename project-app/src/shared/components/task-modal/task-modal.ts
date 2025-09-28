import { Component } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { DynamicAPI } from '../../services/dynamic-api';

@Component({
  selector: 'app-task-modal',
  imports: [ReactiveFormsModule],
  templateUrl: './task-modal.html',
  styleUrl: './task-modal.scss',
})
export class TaskModal {
  form!: FormGroup;

  constructor(private fb: FormBuilder, private service: DynamicAPI) {
    this.buildForm();
  }

  buildForm() {
    this.form = this.fb.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
      dueDate: ['', Validators.required],
      location: ['', Validators.required],
    });
  }

  get f() {
    return this.form.controls;
  }

  resetForm() {
    this.form.reset();
  }

  onSubmit() {
    if (this.form.invalid) {
      return;
    }
    this.service.postTask(this.form.value);
  }
}
