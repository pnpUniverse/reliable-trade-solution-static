import { Component, OnInit, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import { AuthService } from '../shared/services/auth.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IPayPalConfig, ICreateOrderRequest } from 'ngx-paypal';
import { Router } from '@angular/router';
declare let paypal: any;

@Component({
  selector: 'app-membership',
  templateUrl: './membership.component.html',
  styleUrls: ['./membership.component.scss']
})
export class MembershipComponent implements OnInit {
	constructor(
		private authService: AuthService,
		private router: Router
	) { }
	memberships:any;
	payPalConfig?: IPayPalConfig;
	showSuccess:any;
	showModal : boolean;
	UserId    : string;
	Firstname : string;
	Lastname  : string;
	Email     : string;
	service_obj: any;
	paypal_secret_key = "EPsOdG40IvPEm7PA0x4kYVtwce5srL8xdC-2g3NiWl1nE2F-vqaWJMWO_q4BJTLG0Gnyn_yLCm6HITSU";
	paypal_client_id = "AcgDMCAxYPlMVrqv4gbUt6cQMttDges-zEvKEkrFNKNs0YxotG2kkMSaozBaN0C4H0QQKtHrmO3pG3Ww";
  	ngOnInit() {
		this.memberships = [
			{
				currency_used: "SGD",
				service_details_arr: [
					{
						currency_used: "SGD",
						service_price: "299",
						service_slug: "standard_services_service_monthly_1",
						service_tenure: "Monthly Membership"
					},
					{
						currency_used: "SGD",
						service_price: "699",
						service_slug: "standard_services_service_quarterly_slug_2",
						service_tenure: "Quarterly Membership"
					},
					{
						currency_used: "SGD",
						service_price: "1199",
						service_slug: "standard_services_service_half_yearly_slug_3",
						service_tenure: "Half Yearly Membership"
					},
					{
						currency_used: "SGD",
						service_price: "1999",
						service_slug: "standard_services_service_yearly_slug_4",
						service_tenure: "Yearly Membership"
					}
				],
				service_half_yearly: "1199",
				service_half_yearly_slug: "standard_services_service_half_yearly_slug_3",
				service_monthly: "299",
				service_monthly_slug: "standard_services_service_monthly_1",
				service_name: "STANDARD SERVICES",
				service_name_slug: "standard_services",
				service_quarterly: "699",
				service_quarterly_slug: "standard_services_service_quarterly_slug_2",
				service_yearly: "1999",
				service_yearly_slug: "standard_services_service_yearly_slug_4",
				_id: "6083e2a04c48ae3bbd91f326"
			},
			{
				currency_used: "SGD",
				service_details_arr: [
					{
						currency_used: "SGD",
						service_price: "",
						service_slug: "elite_services_service_monthly_2",
						service_tenure: "Monthly Membership"
					}, 
					{
						currency_used: "SGD",
						service_price: "1999",
						service_slug: "elite_services_service_quarterly_slug_3",
						service_tenure: "Quarterly Membership"
					}, 
					{
						currency_used: "SGD",
						service_price: "3499",
						service_slug: "elite_services_service_half_yearly_slug_4",
						service_tenure: "Half Yearly Membership"
					}, 
					{
						currency_used: "SGD",
						service_price: "5999",
						service_slug: "elite_services_service_yearly_slug_5",
						service_tenure: "Yearly Membership"
					}
				],
				service_half_yearly: "3499",
				service_half_yearly_slug: "elite_services_service_half_yearly_slug_4",
				service_monthly: "",
				service_monthly_slug: "elite_services_service_monthly_2",
				service_name: "ELITE SERVICES",
				service_name_slug: "elite_services",
				service_quarterly: "1999",
				service_quarterly_slug: "elite_services_service_quarterly_slug_3",
				service_yearly: "5999",
				service_yearly_slug: "elite_services_service_yearly_slug_5",
				_id: "6083e2cd4c48ae3bbd91f327"
			},
			{
				currency_used: "SGD",
				service_details_arr: [
					{
						currency_used: "SGD",
						service_price: "",
						service_slug: "btst_services_service_monthly_3",
						service_tenure: "Monthly Membership"

					},
					{
						currency_used: "SGD",
						service_price: "3999",
						service_slug: "btst_services_service_quarterly_slug_4",
						service_tenure: "Quarterly Membership"
					},
					{
						currency_used: "SGD",
						service_price: "7999",
						service_slug: "btst_services_service_half_yearly_slug_5",
						service_tenure: "Half Yearly Membership"
					},
					{
						currency_used: "SGD",
						service_price: "9999",
						service_slug: "btst_services_service_yearly_slug_6",
						service_tenure: "Yearly Membership"
					}
				],
				service_half_yearly: "7999",
				service_half_yearly_slug: "btst_services_service_half_yearly_slug_5",
				service_monthly: "",
				service_monthly_slug: "btst_services_service_monthly_3",
				service_name: "BTST SERVICES",
				service_name_slug: "btst_services",
				service_quarterly: "3999",
				service_quarterly_slug: "btst_services_service_quarterly_slug_4",
				service_yearly: "9999",
				service_yearly_slug: "btst_services_service_yearly_slug_6",
				_id: "6083e38c4c48ae3bbd91f328"
			},
			{
				currency_used: "SGD",
				service_details_arr: [
					{
						currency_used: "SGD",
						service_price: "",
						service_slug: "portfolio_drive service_service_monthly_4",
						service_tenure: "Monthly Membership"
					},
					{
						currency_used: "SGD",
						service_price: "5999",
						service_slug: "portfolio_drive service_service_quarterly_slug_5",
						service_tenure: "Quarterly Membership"
					},
					{
						currency_used: "SGD",
						service_price: "9999",
						service_slug: "portfolio_drive service_service_half_yearly_slug_6",
						service_tenure: "Half Yearly Membership"
					},
					{
						currency_used: "SGD",
						service_price: "14999",
						service_slug: "portfolio_drive service_service_yearly_slug_7",
						service_tenure: "Yearly Membership"
					}
				],
				service_half_yearly: "9999",
				service_half_yearly_slug: "portfolio_drive service_service_half_yearly_slug_6",
				service_monthly: "",
				service_monthly_slug: "portfolio_drive service_service_monthly_4",
				service_name: "PORTFOLIO DRIVE SERVICE",
				service_name_slug: "portfolio_drive service",
				service_quarterly: "5999",
				service_quarterly_slug: "portfolio_drive service_service_quarterly_slug_5",
				service_yearly: "14999",
				service_yearly_slug: "portfolio_drive service_service_yearly_slug_7",
				_id: "6083e3b94c48ae3bbd91f329"
			},
			{
				currency_used: "SGD",
				service_details_arr: [
					{
						currency_used: "SGD",
						service_price: "299",
						service_slug: "forex_signal service_service_monthly_5",
						service_tenure: "Monthly Membership"
					},
					{
						currency_used: "SGD",
						service_price: "699",
						service_slug: "forex_signal service_service_quarterly_slug_6",
						service_tenure: "Quarterly Membership"
					},
					{
						currency_used: "SGD",
						service_price: "1299",
						service_slug: "forex_signal service_service_half_yearly_slug_7",
						service_tenure: "Half Yearly Membership"
					},
					{
						currency_used: "SGD",
						service_price: "1999",
						service_slug: "forex_signal service_service_yearly_slug_8",
						service_tenure: "Yearly Membership"
					}
				],
				service_half_yearly: "1299",
				service_half_yearly_slug: "forex_signal service_service_half_yearly_slug_7",
				service_monthly: "299",
				service_monthly_slug: "forex_signal service_service_monthly_5",
				service_name: "FOREX SIGNAL SERVICE",
				service_name_slug: "forex_signal service",
				service_quarterly: "699",
				service_quarterly_slug: "forex_signal service_service_quarterly_slug_6",
				service_yearly: "1999",
				service_yearly_slug: "forex_signal service_service_yearly_slug_8",
				_id: "6083e3eb4c48ae3bbd91f32a"
			},
			{
				currency_used: "SGD",
				service_details_arr: [
					{
						currency_used: "SGD",
						service_price: "299",
						service_slug: "comex_signal service_service_monthly_6",
						service_tenure: "Monthly Membership"
					},
					{
						currency_used: "SGD",
						service_price: "699",
						service_slug: "comex_signal service_service_quarterly_slug_7",
						service_tenure: "Quarterly Membership"
					},
					{
						currency_used: "SGD",
						service_price: "1299",
						service_slug: "comex_signal service_service_half_yearly_slug_8",
						service_tenure: "Half Yearly Membership"
					},
					{
						currency_used: "SGD",
						service_price: "1999",
						service_slug: "comex_signal service_service_yearly_slug_9",
						service_tenure: "Yearly Membership"
					}
				],
				service_half_yearly: "1299",
				service_half_yearly_slug: "comex_signal service_service_half_yearly_slug_8",
				service_monthly: "299",
				service_monthly_slug: "comex_signal service_service_monthly_6",
				service_name: "COMEX SIGNAL SERVICE",
				service_name_slug: "comex_signal service",
				service_quarterly: "699",
				service_quarterly_slug: "comex_signal service_service_quarterly_slug_7",
				service_yearly: "1999",
				service_yearly_slug: "comex_signal service_service_yearly_slug_9",
				_id: "6083e41a4c48ae3bbd91f32b"
			}
		]
		for(let membershipIndex in this.memberships){
			this.memberships[membershipIndex]['service_name_slug'] = this.memberships[membershipIndex].service_name.toLowerCase().replace(' ', '_');
			this.memberships[membershipIndex]['service_monthly_slug'] = this.memberships[membershipIndex].service_name_slug + '_service_monthly_' + ( Number(membershipIndex) + 1 );
			this.memberships[membershipIndex]['service_quarterly_slug'] = this.memberships[membershipIndex].service_name_slug + '_service_quarterly_slug_' + ( Number(membershipIndex) + 2 );
			this.memberships[membershipIndex]['service_half_yearly_slug'] = this.memberships[membershipIndex].service_name_slug + '_service_half_yearly_slug_' + ( Number(membershipIndex) + 3 );
			this.memberships[membershipIndex]['service_yearly_slug'] = this.memberships[membershipIndex].service_name_slug + '_service_yearly_slug_' + ( Number(membershipIndex) + 4 );
			const service_monthly_obj = {
				  service_tenure: 'Monthly Membership',
				  service_price: this.memberships[membershipIndex].service_monthly,
				  service_slug: this.memberships[membershipIndex].service_monthly_slug,
				  currency_used: this.memberships[membershipIndex].currency_used
			  }
			  const service_quarterly_obj = {
				  service_tenure: 'Quarterly Membership',
				  service_price: this.memberships[membershipIndex].service_quarterly,
				  service_slug: this.memberships[membershipIndex].service_quarterly_slug,
				  currency_used: this.memberships[membershipIndex].currency_used
			  }
			  const service_half_yearly_obj = {
				  service_tenure: 'Half Yearly Membership',
				  service_price: this.memberships[membershipIndex].service_half_yearly,
				  service_slug: this.memberships[membershipIndex].service_half_yearly_slug,
				  currency_used: this.memberships[membershipIndex].currency_used
			  }
			  const service_yearly_obj = {
				  service_tenure: 'Yearly Membership',
				  service_price: this.memberships[membershipIndex].service_yearly,
				  service_slug: this.memberships[membershipIndex].service_yearly_slug,
				  currency_used: this.memberships[membershipIndex].currency_used
			  }
			  this.memberships[membershipIndex]['service_details_arr'] = [service_monthly_obj, service_quarterly_obj, service_half_yearly_obj, service_yearly_obj];
			  for(let serv of this.memberships[membershipIndex]['service_details_arr']){
				  // this[`payPalConfig_${serv.service_slug}`] = this.payPalConfig;
				  // this.initConfig_newService(serv.service_slug, serv.currency_used, serv.service_price);
			  }
		}
  		// this.authService.retrieve('memberships').subscribe((res) => {
	    //   	if(res && res['data'] && res['data']){
		// 		this.memberships = res['data'];
		// 		console.log('memberships: ', this.memberships);
	    //   	}
	  	// });
	  	// this.initConfig();
  	}
  	  handleModel(service_name, detail) {
    	this.service_obj = detail;
    	this.service_obj['service_name'] = service_name;
    	this.payPalConfig = {
	      	currency: 'SGD',
	      	clientId: this.paypal_client_id,
	      	createOrderOnClient: (data) => <ICreateOrderRequest>{
		        intent: 'CAPTURE',
		        purchase_units: [
		          	{
		            	amount: {
		              		currency_code: 'SGD',
		              		value: this.service_obj.service_price,
		              		breakdown: {
		                		item_total: {
		                  			currency_code: 'SGD',
		                  			value: this.service_obj.service_price
		                		}
		              		}
		            	},
		            	items: [
		              		{
		                		name: 'Enterprise Subscription',
		                		quantity: '1',
		                		category: 'DIGITAL_GOODS',
		                		unit_amount: {
			                  		currency_code: 'SGD',
			                  		value: this.service_obj.service_price,
			                	},
			              	}
			            ]
		          	}
		        ]
		    },
		    advanced: {
		        commit: 'true'
	      	},
	      	style: {
	        	label: 'paypal',
	        	layout: 'vertical'
			},
			onApprove: (data, actions) => {
	        	console.log('onApprove - transaction was approved, but not authorized', data, actions);
	        	actions.order.get().then(details => {
	          		console.log('onApprove - you can get full order details inside onApprove: ', details);
	        	});
			},
			onClientAuthorization: (data) => {
	        	console.log('onClientAuthorization - you should probably inform your server about completed transaction at this point', data);
	        	this.showSuccess = true;
			},
			onCancel: (data, actions) => {
	        	console.log('OnCancel', data, actions);
			},
			onError: err => {
		        console.log('OnError', err);
			},
			onClick: (data, actions) => {
		        console.log('onClick', data, actions);
	      	}
	    };
	    setTimeout(x => {
	    	this.showModal = true;
	    },200)
	}
	hide() {
    	this.showModal = false;
    	// this.usdPayPalConfig = undefined;
    	// this.sgdPayPalConfig =  undefined;
    	this.payPalConfig = undefined;
    	// this.reloadComponent();
  	}
}
// 	// usdPayPalConfig?: IPayPalConfig;
// 	// sgdPayPalConfig?: IPayPalConfig;
// 	// config?: IPayPalConfig;
// 	memberships:any;
// 	payPalConfig?: IPayPalConfig;
// 	showSuccess:any;
// 	@ViewChild('paypal') paypalElement: ElementRef;	

//   	private loadExternalScript(scriptUrl: string) {
// 	    return new Promise((resolve, reject) => {
// 	    	console.log('url: ', scriptUrl);
// 	      	const scriptElement = document.createElement('script')
// 	      	scriptElement.src = scriptUrl
// 	      	scriptElement.onload = resolve
//       		document.body.appendChild(scriptElement)
//   		})
//   	}

//   	validate(event) {
//       return event.value.length > 0;
//     }

//     // https://www.paypal.com/sdk/js?client-id=AcgDMCAxYPlMVrqv4gbUt6cQMttDges-zEvKEkrFNKNs0YxotG2kkMSaozBaN0C4H0QQKtHrmO3pG3Ww&currency=SGD

//     handleModel(service_name, detail) {
//     	this.service_obj = detail;
//     	this.service_obj['service_name'] = service_name;
//     	this.payPalConfig = {
// 	      	currency: 'SGD',
// 	      	clientId: this.paypal_client_id,
// 	      	createOrderOnClient: (data) => <ICreateOrderRequest>{
// 		        intent: 'CAPTURE',
// 		        purchase_units: [
// 		          	{
// 		            	amount: {
// 		              		currency_code: 'SGD',
// 		              		value: this.service_obj.service_price,
// 		              		breakdown: {
// 		                		item_total: {
// 		                  			currency_code: 'SGD',
// 		                  			value: this.service_obj.service_price
// 		                		}
// 		              		}
// 		            	},
// 		            	items: [
// 		              		{
// 		                		name: 'Enterprise Subscription',
// 		                		quantity: '1',
// 		                		category: 'DIGITAL_GOODS',
// 		                		unit_amount: {
// 			                  		currency_code: 'SGD',
// 			                  		value: this.service_obj.service_price,
// 			                	},
// 			              	}
// 			            ]
// 		          	}
// 		        ]
// 		    },
// 		    advanced: {
// 		        commit: 'true'
// 	      	},56
// 	      	style: {
// 	        	label: 'paypal',
// 	        	layout: 'vertical'
// 			},
// 			onApprove: (data, actions) => {
// 	        	console.log('onApprove - transaction was approved, but not authorized', data, actions);
// 	        	actions.order.get().then(details => {
// 	          		console.log('onApprove - you can get full order details inside onApprove: ', details);
// 	        	});
// 			},
// 			onClientAuthorization: (data) => {
// 	        	console.log('onClientAuthorization - you should probably inform your server about completed transaction at this point', data);
// 	        	this.showSuccess = true;
// 			},
// 			onCancel: (data, actions) => {
// 	        	console.log('OnCancel', data, actions);
// 			},
// 			onError: err => {
// 		        console.log('OnError', err);
// 			},
// 			onClick: (data, actions) => {
// 		        console.log('onClick', data, actions);
// 	      	}
// 	    };
// 	    setTimeout(x => {
// 	    	this.showModal = true;
// 	    },200)
// 	}
//     // 	if(this.service_obj.currency_used == 'USD' ){
// 	  	// 	this.usdPayPalConfig = {
// 		  //     	currency: this.service_obj.currency_used,
// 		  //     	clientId: 'AcgDMCAxYPlMVrqv4gbUt6cQMttDges-zEvKEkrFNKNs0YxotG2kkMSaozBaN0C4H0QQKtHrmO3pG3Ww',
// 		  //     	createOrderOnClient: (data) => <ICreateOrderRequest>{
// 			 //        intent: 'CAPTURE',
// 			 //        purchase_units: [
// 			 //          	{
// 			 //            	amount: {
// 			 //              		currency_code: this.service_obj.currency_used,
// 			 //              		value: this.service_obj.service_price,
// 			 //              		breakdown: {
// 			 //                		item_total: {
// 			 //                  			currency_code: this.service_obj.currency_used,
// 			 //                  			value: this.service_obj.service_price
// 			 //                		}
// 			 //              		}
// 			 //            	},
// 			 //            	items: [
// 			 //              		{
// 			 //                		name: 'Enterprise Subscription',
// 			 //                		quantity: '1',
// 			 //                		category: 'DIGITAL_GOODS',
// 			 //                		unit_amount: {
// 				//                   		currency_code: this.service_obj.currency_used,
// 				//                   		value: this.service_obj.service_price,
// 				//                 	},
// 				//               	}
// 				//             ]
// 			 //          	}
// 			 //        ]
// 			 //    },
// 			 //    advanced: {
// 			 //        commit: 'true'
// 		  //     	},
// 		  //     	style: {
// 		  //       	label: 'paypal',
// 		  //       	layout: 'vertical'
// 				// },
// 				// onApprove: (data, actions) => {
// 		  //       	console.log('onApprove - transaction was approved, but not authorized', data, actions);
// 		  //       	actions.order.get().then(details => {
// 		  //         		console.log('onApprove - you can get full order details inside onApprove: ', details);
// 		  //       	});
// 				// },
// 				// onClientAuthorization: (data) => {
// 		  //       	console.log('onClientAuthorization - you should probably inform your server about completed transaction at this point', data);
// 		  //       	this.showSuccess = true;
// 				// },
// 				// onCancel: (data, actions) => {
// 		  //       	console.log('OnCancel', data, actions);
// 				// },
// 				// onError: err => {
// 			 //        console.log('OnError', err);
// 				// },
// 				// onClick: (data, actions) => {
// 			 //        console.log('onClick', data, actions);
// 		  //     	},
// 		  //   };
//     // 	} else {
//     // 		this.sgdPayPalConfig = {
// 		  //     	currency: 'SGD',
// 		  //     	clientId: 'AcgDMCAxYPlMVrqv4gbUt6cQMttDges-zEvKEkrFNKNs0YxotG2kkMSaozBaN0C4H0QQKtHrmO3pG3Ww',
// 		  //     	createOrderOnClient: (data) => <ICreateOrderRequest>{
// 			 //        intent: 'CAPTURE',
// 			 //        purchase_units: [
// 			 //          	{
// 			 //            	amount: {
// 			 //              		currency_code: 'SGD',
//   	}
// 			 //              		value: this.service_obj.service_price,
// 			 //              		breakdown: {
// 			 //                		item_total: {
// 			 //                  			currency_code: 'SGD',
// 			 //                  			value: this.service_obj.service_price
// 			 //                		}
// 			 //              		}
// 			 //            	},
// 			 //            	items: [
// 			 //              		{
// 			 //                		name: 'Enterprise Subscription',
// 			 //                		quantity: '1',
// 			 //                		category: 'DIGITAL_GOODS',
// 			 //                		unit_amount: {
// 				//                   		currency_code: 'SGD',
// 				//                   		value: this.service_obj.service_price,
// 				//                 	},
// 				//               	}
// 				//             ]
// 			 //          	}
// 			 //        ]
// 			 //    },
// 			 //    advanced: {
// 			 //        commit: 'true'
// 		  //     	},
// 		  //     	style: {
// 		  //       	label: 'paypal',
// 		  //       	layout: 'vertical'
// 				// },
// 				// onApprove: (data, actions) => {
// 		  //       	console.log('onApprove - transaction was approved, but not authorized', data, actions);
// 		  //       	actions.order.get().then(details => {
// 		  //         		console.log('onApprove - you can get full order details inside onApprove: ', details);
// 		  //       	});
// 				// },
// 				// onClientAuthorization: (data) => {
// 		  //       	console.log('onClientAuthorization - you should probably inform your server about completed transaction at this point', data);
// 		  //       	this.showSuccess = true;
// 				// },
// 				// onCancel: (data, actions) => {
// 		  //       	console.log('OnCancel', data, actions);
// 				// },
// 				// onError: err => {
// 			 //        console.log('OnError', err);
// 				// },
// 				// onClick: (data, actions) => {
// 			 //        console.log('onClick', data, actions);
// 		  //     	},
// 		  //   };
//     // 	}

//   	hide() {
//     	this.showModal = false;
//     	// this.usdPayPalConfig = undefined;
//     	// this.sgdPayPalConfig =  undefined;
//     	this.payPalConfig = undefined;
//     	// this.reloadComponent();
//   	}

//   	// reloadComponent() {
//   	// 	let currentUrl = this.router.url;
//    //    	this.router.routeReuseStrategy.shouldReuseRoute = () => false;
//    //    	this.router.onSameUrlNavigation = 'reload';
//    //    	this.router.navigate([currentUrl]);
//   	// }
// }
