import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.page.html',
  styleUrls: ['./faq.page.scss'],
})
export class FAQPage implements OnInit {

  info: any[];
  automaticClose = false;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.getFaq();
  }

  getFaq() {
    this.http.get('assets/faq.json').subscribe(res => {
// tslint:disable-next-line: no-string-literal
      this.info = res['faqs'];

      this.info[0].open = true;
    });
  }

  toggleSection(index) {
    this.info[index].open = !this.info[index].open;

    if (this.automaticClose && this.info[0].open) {
      this.info
      .filter((item, itemIndex) => itemIndex !== index)
      .map(item => item.open = false);
    }
  }

}
