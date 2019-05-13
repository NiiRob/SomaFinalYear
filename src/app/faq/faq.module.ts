import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';
import { HttpClientModule } from '@angular/common/http';

import { FAQPage } from './faq.page';

const routes: Routes = [
  {
    path: '',
    component: FAQPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [FAQPage]
})
export class FAQPageModule {}
