import { Component } from '@angular/core';

@Component({
  selector: 'app-shop-details',
  templateUrl: './shop-details.component.html',
  styleUrls: ['./shop-details.component.css']
})
export class ShopDetailsComponent {
       details: any[] = [];
  ngOnInit(): void {
		this.details = [
      {
        image: '../../assets/j c.jpg',
        head: 'ROLEX',
				description: 'Rolex SA is a Swiss watch designer and manufacturer based in Geneva, Switzerland. Founded in 1905 as Wilsdorf and Davis by Hans Wilsdorf and Alfred Davis in London, the company registered Rolex as the brand name of its watches in 1908 and became Rolex Watch Co.',
        price: `${45000000}rs`
			},
      {
        image: '../../assets/j & c.jpg',
        head: 'JACOB AND CO',
				description: 'In 1986, Arabo opened his own company, called "Diamond Quasar," and began designing under his own label, named "Jacob & Co." The brand quickly gained popularity in New York and was able to expand its business to the luxury watchmaking industry in 2002.',
        price: `${10000000}rs`
			},
      {
        image: '../../assets/ls.webp',
        head: 'lANGE & SOHNE',
				description: 'Lange & Söhne timepiece is equipped with a manufacture movement. To be more precise: all calibres are developed, crafted, finished and assembled in our manufacture in Glashütte. Because it is our clear commitment to exclusively use our own movements. The art of finishing movements ranks high in our manufacture.',
        price: `${4200000}rs`
			},
      {
        image: '../../assets/last2.jpg',
        head: 'VACHRON CONSTANTIN',
				description: 'Founded in 1755, Vacheron Constantin can legitimately claim to be the worlds oldest watch manufacturer in continuous operation, with more than 260 years of uninterrupted expertise and production.',
        price: `${65020000}rs`
			},
      {
        image: 'https://watchesbysjx.com/wp-content/uploads/2023/08/Patek-philippe-Sky-Moon-Tourbillon-6002R-14.jpg',
        head: 'PATEK PHILIPPE',
				description: 'Patek Philippe is widely considered to be one of the most prestigious watch manufacturers in the world. As of July 2023, among the worlds top ten most expensive watches ever sold at auctions, nine are Patek Philippe watches. In particular, Patek Philippe Grandmaster Chime Ref.',
        price: `${400000}rs`
			},
      {
        image: 'https://www.theceomagazine.com/wp-content/uploads/2021/07/roger-dubuis-pirelli-4.jpg',
        head: 'ROGER DUBUIS',
				description: 'Roger Dubuis has been at the forefront of contemporary Haute Horlogerie since 1995. Its audacious creations, firmly anchored in the 21st century, embody substantial expertise expressed through the finest watchmaking mechanisms combined with powerful and daring designs.',
        price: `${2540000}rs`
			},
		];
	}
}
