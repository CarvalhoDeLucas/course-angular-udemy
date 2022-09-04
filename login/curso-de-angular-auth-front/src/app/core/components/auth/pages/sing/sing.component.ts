import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'

// Services
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-sing',
  templateUrl: './sing.component.html',
  styleUrls: ['./sing.component.scss']
})
export class SingComponent implements OnInit {

  public formAuth: FormGroup = this.formBuilder.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required]]
  });

  public msgError!: string;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService
  ) { }

  ngOnInit(): void {
  }

  public submitForm() {
    if (this.formAuth.valid) {
      this.authService.sing({
        email: this.formAuth.value.email,
        password: this.formAuth.value.password,
      }).subscribe({
        next: (res) => res,
        error: (err) => (this.msgError = err),
      });
    }
  }

}
