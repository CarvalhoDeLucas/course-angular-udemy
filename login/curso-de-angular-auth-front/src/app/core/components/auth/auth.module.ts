import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

// Routing
import { AuthRoutingModule } from './auth-routing.module';

// Pages Component
import { SingComponent } from './pages/sing/sing.component';

@NgModule({
  declarations: [
    SingComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    ReactiveFormsModule
  ]
})
export class AuthModule { }
