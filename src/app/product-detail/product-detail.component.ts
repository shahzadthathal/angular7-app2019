import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { ApiService } from '../services/api.service';
import { Product } from '../models/product';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

	product: Product;

  	constructor(
       private route: ActivatedRoute,
  	   private apiService: ApiService,
  	   private location: Location
    ) {}

  	ngOnInit() {
  	  this.getProduct();
  	}

  	getProduct(): void {
  		const slug = this.route.snapshot.paramMap.get('slug');

      this.apiService.getProductDetail(slug)
      .subscribe(product => this.product = product);

  		//this.apiService.getProductDetail(slug).subscribe((res : Product)=>{
			//console.log(res);
        //    this.product = res;
        //});
	  }

	goBack(): void {
	  this.location.back();
	}

}
