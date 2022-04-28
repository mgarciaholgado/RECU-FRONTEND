import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSelectModule } from '@angular/material/select';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
let SharedModule = class SharedModule {
};
SharedModule = __decorate([
    NgModule({
        declarations: [],
        imports: [
            CommonModule,
            MatFormFieldModule,
            MatInputModule,
            FormsModule,
            MatSelectModule,
            MatButtonModule,
            ReactiveFormsModule,
            MatSnackBarModule,
            MatProgressSpinnerModule,
            MatToolbarModule,
            MatIconModule
        ],
        exports: [
            MatFormFieldModule,
            MatInputModule,
            FormsModule,
            MatSelectModule,
            MatButtonModule,
            ReactiveFormsModule,
            MatSnackBarModule,
            MatProgressSpinnerModule,
            MatToolbarModule,
            MatIconModule
        ],
    })
], SharedModule);
export { SharedModule };
//# sourceMappingURL=shared.module.js.map