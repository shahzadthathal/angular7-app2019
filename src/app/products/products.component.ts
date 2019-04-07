import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { ApiService } from '../services/api.service';
import { Product } from '../models/product';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

 	private products : Product[] = []; 

  	constructor(private apiService: ApiService) { }



  	ngOnInit() {

  		this.apiService.getProducts().subscribe((res : Product[])=>{
			console.log(res);
            this.products = res;
        });
  	}


}
