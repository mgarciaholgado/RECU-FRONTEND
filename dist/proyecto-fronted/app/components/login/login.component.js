import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { Validators } from '@angular/forms';
let LoginComponent = class LoginComponent {
    constructor(fb, _snackBar, router) {
        this.fb = fb;
        this._snackBar = _snackBar;
        this.router = router;
        this.loading = false;
        this.form = this.fb.group({
            usuario: ['', Validators.required],
            pass: ['', Validators.required],
        });
    }
    ngOnInit() { }
    logear() {
        const usuario = this.form.value.usuario;
        const pass = this.form.value.pass;
        if (usuario == 'mike' && pass == 'mike22') {
            this.fakeLoading();
        }
        else {
            this.error();
            this.form.reset();
        }
    }
    error() {
        this._snackBar.open('usuario o contraseña incorrectos', '', {
            duration: 2000,
            horizontalPosition: 'center',
            verticalPosition: 'bottom',
        });
    }
    fakeLoading() {
        this.loading = true;
        setTimeout(() => {
            this.router.navigate(['/dashboard']);
        }, 1500);
    }
};
LoginComponent = __decorate([
    Component({
        selector: 'app-login',
        templateUrl: './login.component.html',
        styleUrls: ['./login.component.css'],
    })
], LoginComponent);
export { LoginComponent };
//# sourceMappingURL=login.component.js.map