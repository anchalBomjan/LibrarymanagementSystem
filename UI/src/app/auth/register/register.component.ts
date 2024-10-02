 import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';




@Component({
  selector: 'register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {
 
  hidePwdContent: boolean = true;
  registerForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.registerForm = fb.group({
      firstName: fb.control('', [Validators.required]),
      lastName: fb.control('', [Validators.required]),
      email: fb.control('', [Validators.required]),
      mobileNumber: fb.control('', [Validators.required]),
      password: fb.control('', [Validators.required]),
      rpassword: fb.control('', [Validators.required]),
    });
  }

}


// import { Component } from '@angular/core';

// import { FormBuilder, FormGroup, Validators } from "@angular/forms";
// import { MatSnackBar } from "@angular/material/snack-bar";
// // import { ApiService } from "../../shared/services/api.service";
// @Component({
//   selector: 'app-register', // Use a valid selector
//   templateUrl: './register.component.html',
//   styleUrls: ['./register.component.scss'], // Corrected to styleUrls
// })
// export class RegisterComponent {
//   hidePwdContent: boolean = true;
//   registerForm: FormGroup;

//   constructor(
//     private fb: FormBuilder,
//    // private apiService: ApiService,
//     private snackBar: MatSnackBar
//   ) {
//     this.registerForm = this.fb.group({
//       firstName: this.fb.control('', [Validators.required]),
//       lastName: this.fb.control('', [Validators.required]),
//       email: this.fb.control('', [Validators.required, Validators.email]),
//       mobileNumber: this.fb.control('', [Validators.required]),
//       password: this.fb.control('', [Validators.required]),
//       rpassword: this.fb.control('', [Validators.required]),
//     });
//   }

//   register() {
//     if (this.registerForm.valid) {
//       const user = {
//         firstName: this.registerForm.get('firstName')?.value,
//         lastName: this.registerForm.get('lastName')?.value,
//         email: this.registerForm.get('email')?.value,
//         mobileNumber: this.registerForm.get('mobileNumber')?.value,
//         password: this.registerForm.get('password')?.value,
//       };

//       this.apiService.register(user).subscribe({
//         next: (res) => {
//           this.snackBar.open(res, 'OK');
//         },
//         error: (err) => {
//           this.snackBar.open(err.error.message, 'Close');
//         },
//       });
//     }
//   }
// }
