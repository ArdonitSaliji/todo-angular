import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthenticateComponent } from './authenticate.component';

@NgModule({
  declarations: [AuthenticateComponent],
  imports: [CommonModule, ReactiveFormsModule],
})
export class AuthenticateModule {}
