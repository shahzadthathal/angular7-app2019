import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

	constructor() { }


  	title = 'Angular 7 App 2019';

  	/*products: Product[] =[ 
  		{
		    slug: 'abc-shoes',
			name: 'ABC Shoes',
			price: '33',
			description: 'ABC product description goes here',
			image: 'https://via.placeholder.com/350x150',
	  	},
	  	{
		    slug: 'xyz-shoes',
			name: 'XYZ Shoes',
			price: '33',
			description: 'XYZ product description goes here',
			image: 'https://via.placeholder.com/350x150',
	  	},
	];*/
	
	ngOnInit() { }

}
