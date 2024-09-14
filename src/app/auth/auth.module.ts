import { NgModule } from '@angular/core';
import { ModuleWithProviders } from '@angular/compiler/src/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import * as fromAuth from './reducers';
import { AuthService } from './auth.service';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    StoreModule.forFeature(fromAuth.authFeatureKey, fromAuth.authReducer)
  ]
})
export class AuthModule {
  static forRoot(): ModuleWithProviders {
    return {
        ngModule: AuthModule,
        providers: [
          AuthService,
        ]
    }
}
 }
