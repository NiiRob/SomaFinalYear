import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';
import { ToastController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  email = '';
  password = '';
  confirmPassword = '';

  constructor(public afAuth: AngularFireAuth, public toastController: ToastController, private router: Router) { }

  ngOnInit() {
  }

  async onRegister() {
    const {email, password} = this;
    try {
      const res = await this.afAuth.auth.createUserWithEmailAndPassword(email, password);
      // console.log(res);
      const toast = await this.toastController.create({
        message: 'Account Created Successfully',
        duration: 2000,
        color: 'success',
        position: 'top'
      });
      toast.present();
      this.router.navigateByUrl('/login');
      this.resetForm();
    } catch (err) {
      console.dir(err);
      if (err.code === 'auth/invalid-email') {
        const toast = await this.toastController.create({
          message: 'Invalid Email',
          duration: 2000,
          color: 'danger',
          position: 'top'
        });
        toast.present();
      }
    }
  }

  resetForm() {
    this.email = '';
    this.password = '';
    this.confirmPassword = '';
  }

}
