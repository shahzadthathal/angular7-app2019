import { Component, OnInit } from '@angular/core';

import { ApiService } from '../services/api.service';
import { Product } from '../models/product';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

	//private products : Product[] = []; 
	private products: Product[];


  	constructor(private apiService: ApiService) { }



  	ngOnInit() {

  		this.getProducts();

  		//this.apiService.getProducts().subscribe((res : Product[])=>{
		//	console.log(res);
         //   this.products = res;
        //});
  	}

  	getProducts(): void {
    	this.apiService.getProducts().subscribe(products => this.products = products);
  	}


}
