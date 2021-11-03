import { Component, OnInit } from '@angular/core';
import { AuthService } from '../shared/services/auth.service';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent implements OnInit {
	services:any;
	constructor(
		private authService: AuthService
	) { }

	ngOnInit(): void {
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
		// this.authService.retrieve('services').subscribe((res) => {
    //   	if(res && res['data'] && res['data']){
    //     	this.services = res['data'];
    //     	console.log('this.services: ', this.services);
    //       this.services['show_hide'] = false;
    //   	}
  	// });
	}

  handleShowHide(_id, status_update){
    for(let service of this.services){
      if(service._id == _id) {
        service = status_update;
      } else {
        service.show_hide = false;
      }
    }
  }
}
