import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Product } from '../models/product';

@Injectable({

  providedIn: 'root'

})

export class ApiService {

  	apiURL: string = 'http://api.bucks.vip/api/';

  	constructor(private httpClient: HttpClient) {}

  	public getProducts(){

    	return this.httpClient.get<Product[]>(`${this.apiURL}v3/test/product/listing?api_token=xyz`);
  	
  	}

  	

  	public getProductDetail(slug: string){

  		return this.httpClient.get<Product>(`${this.apiURL}v3/test/product/detail?api_token=xyz&slug=${slug}`);
	}

}