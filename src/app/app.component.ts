import { Component, OnInit, ViewChild, TemplateRef,  AfterViewInit  } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { AuthService } from './shared/services/auth.service';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastConfig, Toaster, ToastType } from "ngx-toast-notifications";
// import { IPayPalConfig, ICreateOrderRequest } from 'ngx-paypal';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, AfterViewInit {
  @ViewChild('mymodal') mymodal : TemplateRef<any>;
  // payPalConfig?: IPayPalConfig;
  title = 'reliable-trade-solutions';
  collapse: boolean = true;
  selectedIndex: any = null;
  selectedIndexBottom: any = null;
  loginForm: FormGroup;
  loginError: any;
  myRoutes = [
    {
      name : 'Home',
      url: '/'
    },
    {
      name : 'About US',
      url: '/about-us'
    },
    {
      name : 'Services',
      url: '/services'
    },
    {
      name : 'Membership',
      url: '/membership'
    },
    {
      name : 'Performance',
      url: '/performance'
    },
    {
      name : 'Contact US',
      url: '/contact-us'
    }
  ]

  myRoutesBottom = [
    {
      name : 'Home',
      url: '/'
    },
    {
      name : 'About US',
      url: '/about-us'
    },
    {
      name : 'Services',
      url: '/services'
    },
    {
      name : 'Membership',
      url: '/membership'
    },
    {
      name : 'Performance',
      url: '/performance'
    },
    {
      name : 'Contact US',
      url: '/contact-us'
    },
    {
      name : 'Privacy Policy',
      url: '/privacy_policy'
    },
    {
      name : 'Terms & Condition',
      url: '/terms_and_condition'
    },
    {
      name : 'Disclaimer',
      url: '/disclaimer'
    },
    {
      name : 'Refund Policy',
      url: '/refund_policy'
    }
  ]
  services:any;
  contact_us_content: any;
  closeResult: string;
  showSuccess:any;
  currency:any = 'SGD';
  constructor(
    private router: Router,
    private authService: AuthService,
    private modalService: NgbModal,
    private fb: FormBuilder,
    private toaster: Toaster
  ) { }

  ngOnInit(): void {
    this.router.events.subscribe(val => {
      if (val instanceof NavigationEnd) {
        const resultBottom = this.myRoutesBottom.findIndex(function(object) {
          return object.url == val.url;
        });
        if(resultBottom > -1) {
          this.selectedIndexBottom = resultBottom; 
        }
        const result = this.myRoutes.findIndex(function(object) {
          return object.url == val.url;
        });
        if(result > -1) {
          this.selectedIndex = result; 
        }
        window.scrollTo(0, 0);
      }
    });
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
    this.contact_us_content= {
      contact_no: "+60 182715774, +60 1169607618",
      email: "info@reliabletradesolution.com",
      lat: "3.207840",
      lng: "101.648850",
      location: "Damansara, Empire City, Kuala Lumpur 52000",
      slug: "contact_us_content",_id: "6083e20a4c48ae3bbd91f325"
    }
    // this.authService.retrieve('services').subscribe((res) => {
    //   if(res && res['data'] && res['data']){
    //     this.services = res['data'];
    //   }
    // });

    // this.authService.retrieveBySlug('contact_us_content', 'contact_us_content').subscribe((res) => {
    //   if(res && res['data'] && res['data']['_id']){
    //     this.contact_us_content = res['data'];
    //     console.log('this.contact_us_content: ', this.contact_us_content);
    //   }
    // });
    this.buildForm();
    // this.initConfig('USD');
  }

  ngAfterViewInit() {
    this.open(this.mymodal);
  }

  changeCurrency(currency){
    this.currency = currency;
    // this.initConfig(currency);
  }

  // initConfig(currency): void {
  //   this.payPalConfig = {
  //     currency: this.currency,
  //     clientId: 'sb',
  //     createOrderOnClient: (data) => <ICreateOrderRequest>{
  //       intent: 'CAPTURE',
  //       purchase_units: [
  //         {
  //           amount: {
  //             currency_code: this.currency,
  //             value: '9.99',
  //             breakdown: {
  //               item_total: {
  //                 currency_code: this.currency,
  //                 value: '9.99'
  //               }
  //             }
  //           },
  //           items: [
  //             {
  //               name: 'Enterprise Subscription',
  //               quantity: '1',
  //               category: 'DIGITAL_GOODS',
  //               unit_amount: {
  //                 currency_code: this.currency,
  //                 value: '9.99',
  //               },
  //             }
  //           ]
  //         }
  //       ]
  //     },
  //     advanced: {
  //       commit: 'true'
  //     },
  //     style: {
  //       label: 'paypal',
  //       layout: 'vertical'
  //     },
  //     onApprove: (data, actions) => {
  //       console.log('onApprove - transaction was approved, but not authorized', data, actions);
  //       actions.order.get().then(details => {
  //         console.log('onApprove - you can get full order details inside onApprove: ', details);
  //       });
  //     },
  //     onClientAuthorization: (data) => {
  //       console.log('onClientAuthorization - you should probably inform your server about completed transaction at this point', data);
  //       this.showSuccess = true;
  //     },
  //     onCancel: (data, actions) => {
  //       console.log('OnCancel', data, actions);
  //     },
  //     onError: err => {
  //       console.log('OnError', err);
  //     },
  //     onClick: (data, actions) => {
  //       console.log('onClick', data, actions);
  //     },
  //   };
  // }

  buildForm() {
    this.loginForm = this.fb.group({
      name: ['', [Validators.required]],
      mobile: ['', [Validators.required]],
      email: ['', [Validators.required]],
      service: ['', [Validators.required]]
    });
  }

  get f() {
    return this.loginForm.value;
  }

  loginUser() {
    // const formData = new FormData();
    // const obj = {
    //   name 
    // }
    // ['name', 'mobile', 'email', 'service'].map(d => formData.append(d, this.f[d]));

    this.authService.create(this.loginForm.value, 'free_trial_request').subscribe((res) => {
      if (res) {
        this.toaster.open({
          text: 'Our Representative will get back to you soon !!',
          caption: 'Free Trial Request Notification',
          type: 'success',
        });
        this.loginForm.reset();
        this.loginForm.patchValue({
          service: ''
        })
      }
    });
  }

  open(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }
  
  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }

  setIndex(index: number) {
    this.selectedIndex = index;
  }

  setIndexBottom(index: number) {
    this.selectedIndexBottom = index;
  }
}
