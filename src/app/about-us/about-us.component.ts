import { Component, OnInit } from '@angular/core';
import { AuthService } from '../shared/services/auth.service';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss']
})
export class AboutUsComponent implements OnInit {

  constructor(
  	private authService: AuthService
  ) { }

  about_us: any;

  ngOnInit(): void {
    this.about_us = {
      content: "<p style=\"text-indent: 0.5in; margin-bottom: 0in; line-height: 115%;\"><font size=\"5\" style=\"font-size: 20pt;\"><b>R</b></font>eliable\n<font size=\"5\" style=\"font-size: 20pt;\"><b>T</b></font>rade <font size=\"5\" style=\"font-size: 20pt;\"><b>S</b></font>olution\nis trading consultant company which is well known for its accuracy &amp;\nprofitability in the market. We ensure our clients with higher\nreturns. Our services designed dynamically as per clients need &amp;\nway of trading. Our expert team assists you 24*7 on your every market\nconcerns.</p><p style=\"text-indent: 0.5in; margin-bottom: 0in; line-height: 115%;\">Our\nresearcher’s has very rich experience over the market to serve the\nclients. We take cares clients investment, give highly accurate\nsignals &amp; deliver assured profit. We mainly serve KLSE, FOREX &amp;\nCOMEX clients around the world on minimal charges &amp; give towering\nreturns throughout.</p><p style=\"text-indent: 0.5in; margin-bottom: 0in; line-height: 115%;\">We\nReliable Trade Solution work for the client’s satisfaction &amp;\nportfolio growth. We are committed towards client’s evolution. Your\nprogress is our responsibility. \n</p>",
      mission: "To serve clients globally with the sole aim of deliver consistent profit throughout.",
      purpose: "To enhance proficient team to serve & relish our Traders.",
      slug: "about_us",
      vision: "Accomplish our commitment of higher return & lead in Consultancy.",
      _id: "6083df3f4c48ae3bbd91f31e"
    }
  	// this.authService.retrieveBySlug('about_us', 'about_us').subscribe((res) => {
    //   if(res && res['data'] && res['data']['_id']){
    //     this.about_us = res['data'];
    //     console.log('about us: ', this.about_us);
    //   }
    // });
  }

}
