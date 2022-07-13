import { Component, OnDestroy, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { select, Store } from '@ngrx/store';
import { Subject, takeUntil } from 'rxjs';
import { login } from '../store/auth.actions';
import { AuthState, selectLoginFailure } from '../store/auth.selector';

@Component({
  selector: 'mean-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit, OnDestroy {
  form: FormGroup;
  onDestroy$: Subject<boolean> = new Subject<boolean>();
  isSubmitted = false;

  get email(): AbstractControl | null {
    return this.form.get('email');
  }

  get password(): AbstractControl | null {
    return this.form.get('password');
  }

  constructor(
    private readonly store: Store<AuthState>,
    private readonly fb: FormBuilder,
    private readonly snackbar: MatSnackBar
  ) {}

  ngOnInit(): void {
    const err = 'Invalid credentials. Please try again!';

    this.store
      .pipe(takeUntil(this.onDestroy$), select(selectLoginFailure))
      .subscribe(
        (flag) => {
          this.isSubmitted && flag && this.snackbar.open(err, 'Error!', { duration: 4000 });
        }
        
      );

    this.initializeForm();
  }

  ngOnDestroy(): void {
    this.onDestroy$.next(true);
    this.onDestroy$.complete();
  }

  initializeForm(): void {
    this.form = this.fb.group({
      email: [null, [Validators.required, Validators.email]],
      password: [null, [Validators.required]],
    });
  }

  login(): void {
    if (this.form.valid) {
      this.isSubmitted = true;
      this.store.dispatch(login(this.form.value));
    }
  }
}
