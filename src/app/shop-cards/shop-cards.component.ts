import { Component, Input } from '@angular/core';

@Component({
  selector: 'acardspp-shop-',
  templateUrl: './shop-cards.component.html',
  styleUrls: ['./shop-cards.component.css']
})
export class ShopCardsComponent {
  ngOnInit(): void {}
  @Input() cards: any[] = [];
}
