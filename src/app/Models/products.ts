//   id: 1,
//   "title": "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
//   "price": 109.95,
//   "description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
//   "category": "men's clothing",
//   "rating": 3.9p





export class Prodacts{
id ! : number;
title! : string;
price! : number;
description! : string;
category! : Category ;
rating! : number;
image ! : string;
}

export enum Category{
    man = 'mens clothing',
    woman = 'womens clothing ',
}