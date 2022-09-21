import { Injectable } from '@angular/core';
import { Product } from './products';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  items: Product[] = [];

  constructor() {}

  // 将产品附加到 items 数组中
  addToCart(product: Product) {
    this.items.push(product);
  }

  // 收集用户加到购物车中的商品，并返回每个商品及其数量
  getItems() {
    return this.items;
  }

  // 返回一个空数组
  clearCart() {
    this.items = [];
    return this.items;
  }
}
