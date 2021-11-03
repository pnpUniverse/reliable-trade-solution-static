import { Component, OnInit } from '@angular/core';
import { AuthService } from '../shared/services/auth.service';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { environment } from '../../environments/environment';
const { image_path } = environment;
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
	homeObj: any;
	obj: any;
	services: any;
	image_path_server: any = "../../assets/img/"; //image_path;
	images = [1, 2, 3].map(() => `https://picsum.photos/900/500?random&t=${Math.random()}`);
  	constructor(
	  	private authService: AuthService,
	  	config: NgbCarouselConfig
	) {
  		config.interval = 5000;
	    config.wrap = false;
	    config.keyboard = false;
	    config.pauseOnHover = false;
	    config.wrap = true;
	}

  	ngOnInit(): void {
		this.homeObj = {
			banner_image_path: ["1629017772382_about_us.jpg", "1629017772383_Forex_charts.jpg"],
			banner_message: "Reliable Trade Solution is trading consultant company which is well known for its accuracy & profitability in the market. We ensure our clients with higher returns. We work on Profit Regularity Model. Our services designed dynamically as per clients need & way of trading. Our expert team assists 24*7 on your every market concerns & deliver towering return.",
			banner_messages: ["We take care your investment Reliably", "Start your profitable trading journey with us"],
			name: "RELIABLE TRADE SOLUTION",
			our_vision: "We Support You Grow",
			slug: "home",
			_id: "608ac0866ce4620d52e83ac8"
		}
		this.services = [
			{
				serviceDesc: "Standard Services is designed for short term traders who trade full time in KLSE for intraday, contraday & swing as well. It gives return on daily basis. ",
				serviceName: "STANDARD SERVICES",
				serviceServices: "<ul>\n\t<li>\n<p style=\"margin-bottom: 0in; line-height: 115%;\">2-3 Tickets\n\ton daily basis</p>\n\t</li><li>\n<p style=\"margin-bottom: 0in; line-height: 115%;\">Strong\n\tTrading Level Technically &amp; Fundamentally</p>\n\t</li><li>\n<p style=\"margin-bottom: 0in; line-height: 115%;\">Higher\n\tReturns on Monthly Basis</p>\n\t</li><li>\n<p style=\"margin-bottom: 0in; line-height: 115%;\">Well Accurate\n\tTickets on Daily Basis</p>\n\t</li><li>\n<p style=\"margin-bottom: 0in; line-height: 115%;\">Personal\n\tFollow Up &amp; Assistance \n\t</p>\n\t</li><li>\n<p style=\"margin-bottom: 0in; line-height: 115%;\">Precise\n\treports on clients demand</p>\n\t</li><li>\n<p style=\"margin-bottom: 0in; line-height: 115%;\">Tickets share\n\tthrough WhatsApp</p>\n\t</li><li>\n<p style=\"margin-bottom: 0in; line-height: 115%;\">24*7 Support\n\t&amp; Assistance \n\t</p>\n</li></ul>",
				_id: "6083dfb24c48ae3bbd91f31f"
			},
			{
				serviceDesc: "Elite Service is the premium service which intends to design for greater profit. This premium service design for traders who seek higher profit for intraday. Its meet up the expectations of client who has good investment fund & get better return on their investment. In this service, we provide penny, mid cap & blue chip tickets to traders. In Elite Premium Service expertise research team assign for the traders.",
				serviceName: "ELITE SERVICES",
				serviceServices: "<ul>\n\t<li>\n<p style=\"margin-bottom: 0in; line-height: 115%;\">1-2 Tickets\n\ton daily basis</p>\n\t</li><li>\n<p style=\"margin-bottom: 0in; line-height: 115%;\">Highly\n\tAssured Tickets</p>\n\t</li><li>\n<p style=\"margin-bottom: 0in; line-height: 115%;\">Higher Return\n\tfor Intraday</p>\n\t</li><li>\n<p style=\"margin-bottom: 0in; line-height: 115%;\">Ideal Team of\n\tResearcher for Elite Tickets \n\t</p>\n\t</li><li>\n<p style=\"margin-bottom: 0in; line-height: 115%;\">Daily Report\n\tof Technical &amp; Fundamental Shared with Clients</p>\n\t</li><li>\n<p style=\"margin-bottom: 0in; line-height: 115%;\">Prioritize\n\tFollow Up &amp; Assistance   \n\t</p>\n\t</li><li>\n<p style=\"margin-bottom: 0in; line-height: 115%;\">Privilege\n\tService Experience \n\t</p>\n\t</li><li>\n<p style=\"margin-bottom: 0in; line-height: 115%;\">Tickets Share\n\tthrough WhatsApp</p>\n\t</li><li>\n<p style=\"margin-bottom: 0in; line-height: 115%;\">24*7 Support\n\t&amp; Assistance \n\t</p>\n</li></ul>",
				_id: "6083dfe74c48ae3bbd91f320"
			},
			{
				serviceDesc: "BTST Service by its name indicates everything Buy Today Sell Tomorrow. This service design especially for the traders who doesn’t have much time to monitor or buy/sell the tickets frequently in a day & avoid day trading/intraday. It give very high return in a ticket overnight. Traders just need to buy the given ticket in a day & sell the ticket on very next day. ",
				serviceName: "BTST SERVICES",
				serviceServices: "<ul>\n\t<li>\n<p style=\"margin-bottom: 0in; line-height: 115%;\">1-2 Tickets\n\ton daily basis</p>\n\t</li><li>\n<p style=\"margin-bottom: 0in; line-height: 115%;\">Highly\n\tAssured Tickets</p>\n\t</li><li>\n<p style=\"margin-bottom: 0in; line-height: 115%;\">Higher\n\tReturns for Contraday \n\t</p>\n\t</li><li>\n<p style=\"margin-bottom: 0in; line-height: 115%;\">Separate\n\tHighly Expertise Research Team for BTST</p>\n\t</li><li>\n<p style=\"margin-bottom: 0in; line-height: 115%;\">Daily Report\n\tof Technical &amp; Fundamental Shared with Clients</p>\n\t</li><li>\n<p style=\"margin-bottom: 0in; line-height: 115%;\">Exclusive\n\tHassle Free Service</p>\n\t</li><li>\n<p style=\"margin-bottom: 0in; line-height: 115%;\">Tickets Share\n\tthrough WhatsApp</p>\n\t</li><li>\n<p style=\"margin-bottom: 0in; line-height: 115%;\">24*7 Support\n\t&amp; Assistance \n\t</p>\n</li></ul>",
				_id: "6083e02c4c48ae3bbd91f321"
			},
			{
				serviceDesc: "In this service our expert team of Executive & Researcher operate clients portfolio. This is the high end Premium service for the trader who doesn’t have time to trade. In this service client privilege the Stress Free trading experience. We are whole sole responsible for the trading. ",
				serviceName: "PORTFOLIO DRIVE SERVICE",
				serviceServices: "<ul>\n\t<li>\n<p style=\"margin-bottom: 0in; line-height: 115%;\">2 Tickets on\n\tDaily Basis \n\t</p>\n\t</li><li>\n<p style=\"margin-bottom: 0in; line-height: 115%;\">Towering\n\tReturn on Monthly Basis</p>\n\t</li><li>\n<p style=\"margin-bottom: 0in; line-height: 115%;\">1 Executive &amp;\n\t1 Researcher for Each Portfolio</p>\n\t</li><li>\n<p style=\"margin-bottom: 0in; line-height: 115%;\">Communication\n\tvia Voice Call &amp; Whatsapp \n\t</p>\n\t</li><li>\n<p style=\"margin-bottom: 0in; line-height: 115%;\">Stress Free\n\tService Experience \n\t</p>\n\t</li><li>\n<p style=\"margin-bottom: 0in; line-height: 115%;\">24*7\n\tAvailability for Support &amp; Discussion</p>\n</li></ul>",
				_id: "6083e0604c48ae3bbd91f322"
			},
			{
				serviceDesc: "This service is design for the traders who prefer to trade in Global Currencies. Signals provide with highly accurate technical & Fundamental level. Our highly experience team maintain good return on investment through strategic planning.",
				serviceName: "FOREX SIGNAL SERVICE",
				serviceServices: "<ul>\n\t<li>\n<p style=\"margin-bottom: 0in; line-height: 115%;\">2 Signals on\n\tDaily Basis \n\t</p>\n\t</li><li>\n<p style=\"margin-bottom: 0in; line-height: 115%;\">Good Return\n\ton Investment \n\t</p>\n\t</li><li>\n<p style=\"margin-bottom: 0in; line-height: 115%;\">Report of\n\tSpecific Currency Pair on Clients demand</p>\n\t</li><li>\n<p style=\"margin-bottom: 0in; line-height: 115%;\">Well\n\ttechnically &amp; Fundamentally Analyzed Pair \n\t</p>\n\t</li><li>\n<p style=\"margin-bottom: 0in; line-height: 115%;\">Weekly Report\n\tof Major Currency Pair</p>\n\t</li><li>\n<p style=\"margin-bottom: 0in; line-height: 115%;\">Signals Share\n\tthrough WhatsApp</p>\n\t</li><li>\n<p style=\"margin-bottom: 0in; line-height: 115%;\">24*7 Support\n\t&amp; Assistance \n\t</p>\n</li></ul>",
				_id: "6083e08a4c48ae3bbd91f323"
			},
			{
				serviceDesc: "In the context of Global Market Movement & with the help of International news & statistics our expert team of researcher bring out amazingly high returns for the traders who devoted to trade in Comex Market.",
				serviceName: "COMEX SIGNAL SERVICE",
				serviceServices: "<ul>\n\t<li>\n<p style=\"margin-bottom: 0in; line-height: 115%;\">2 Signals on\n\tDaily Basis \n\t</p>\n\t</li><li>\n<p style=\"margin-bottom: 0in; line-height: 115%;\">Decent Return\n\ton Investment \n\t</p>\n\t</li><li>\n<p style=\"margin-bottom: 0in; line-height: 115%;\">Daily\n\tTechnical &amp; Fundamental Report \n\t</p>\n\t</li><li>\n<p style=\"margin-bottom: 0in; line-height: 115%;\">Proper Follow\n\tUp &amp; Assistance</p>\n\t</li><li>\n<p style=\"margin-bottom: 0in; line-height: 115%;\">Strategic\n\tTrading as per Global Market Movement \n\t</p>\n\t</li><li>\n<p style=\"margin-bottom: 0in; line-height: 115%;\">Signals Share\n\tthrough WhatsApp</p>\n\t</li><li>\n<p style=\"margin-bottom: 0in; line-height: 115%;\">24*7 Support\n\t&amp; Assistance</p>\n</li></ul>",
				_id: "6083e0b34c48ae3bbd91f324"
			}
		]
	  	// this.authService.retrieveBySlug('home', 'home').subscribe((res) => {
	    //   	if(res && res['data'] && res['data']['_id']){
		//         this.homeObj = res['data'];
		// 		console.log('homeObj: ', this.homeObj);
		//         this.homeObj['banner_messages'] = [
		//         'We take care your investment Reliably',
		//         'Start your profitable trading journey with us'
		//         ]
		//         // console.log('images: ', this.homeObj.banner_image_path, image_path);
		//         // for(let srcs of res['data']['banner_image_path']){
		//         //   this.filesrc.push(`${fileLocation}`)
		//         // }
	    //   	}
	    // });

	    // this.authService.retrieve('services').subscribe((res) => {
	    //   	if(res && res['data'] && res['data']){
		//         this.services = res['data'];
		// 		console.log('services: ', this.services)
	    //   	}
	    // });
  	}
}
