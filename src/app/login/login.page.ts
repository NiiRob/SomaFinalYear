import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';
import { ToastController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  email = '';
  password = '';

  constructor(public afAuth: AngularFireAuth, public toastController: ToastController, private router: Router) { }

  ngOnInit() {
  }

  async onLogin() {
    const { email, password} = this;

    try {
      const res = await this.afAuth.auth.signInWithEmailAndPassword(email, password);
      this.router.navigateByUrl('/chat');
      this.resetForm();
    } catch (err) {
      // console.dir(err);
      if (err.code === 'auth/user-not-found') {
        // console.log('User not found');
        const toast = await this.toastController.create({
        message: 'Invalid User',
        duration: 2000,
        color: 'danger',
        position: 'top'
      });
        toast.present();
      } else if (err.code === 'auth/wrong-password') {
        const toast = await this.toastController.create({
        message: 'Wrong Password',
        duration: 2000,
        color: 'danger',
        position: 'top'
      });
        toast.present();
      } else {
        const toast = await this.toastController.create({
          message: 'Invalid Username or Password',
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
  }

}
