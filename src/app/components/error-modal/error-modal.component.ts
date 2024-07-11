import { OnInit, Component, Inject, OnDestroy } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { LoginComponent } from '../auth/components/login/login.component';
import { AuthService } from '../auth/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-error-modal',
  templateUrl: './error-modal.component.html',
  styleUrls: ['./error-modal.component.scss']
})
export class ErrorModalComponent implements OnInit, OnDestroy {

  msg: string = "";

  constructor(
    public dialogRef: MatDialogRef<LoginComponent>,
    public authService: AuthService,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private router: Router,
  ) { }

  ngOnInit(): void {
    if (this.data.type === 'backend') {
      const currentUrl = this.data.error.url;
      if (this.data.error.status == 0) {
        this.msg = 'Nuestros servidores no se encuentran disponible actualmente. Por favor, inténtelo más tarde.';
      } else if (!currentUrl?.includes("login") && this.data.error.status >= 401 && this.data.error.status <= 403) {
        this.msg = 'Debe iniciar sesión';
      } else if (this.data.error.status == 404) {
        this.msg = `Recurso no encontrado: ${this.data.error.url}`; 
      } else {
        this.msg = this.data.error.error.message;
      }
    } else if (this.data.type === 'frontend') {
      this.msg = this.data.error;
    }
  }

  onClick(): void {
    this.dialogRef.close();
  }

  ngOnDestroy(): void {
    if (this.msg === 'Debe iniciar sesión') {
      this.router.navigate(["/auth"]);
      localStorage.clear();
    }
  }

}
