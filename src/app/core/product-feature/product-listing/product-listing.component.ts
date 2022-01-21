import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/_models/product/product.model';
@Component({
  selector: 'app-product-listing',
  templateUrl: './product-listing.component.html',
  styleUrls: ['./product-listing.component.scss']
})
export class ProductListingComponent implements OnInit {
  productArray : Product [] = [
    {id:1,name:"Camera",price:100,discount:10,imageUrl:"https://picsum.photos/200/300"},
    {id:2,name:"Game",price:200,discount:10,imageUrl:"https://picsum.photos/200/301"},
    {id:3,name:"Computer",price:500,discount:20,imageUrl:"https://picsum.photos/200/302"},
    {id:4,name:"Toy",price:1000,discount:20,imageUrl:"https://picsum.photos/200/303"},
    {id:5,name:"dress",price:2000,discount:50,imageUrl:"https://picsum.photos/200/304"},
    {id:6,name:"pen",price:3500,discount:50,imageUrl:"https://picsum.photos/200/305"},
    {id:7,name:"Labtop",price:5000,discount:100,imageUrl:"https://picsum.photos/200/306"},
    {id:8,name:"TV",price:6000,discount:100,imageUrl:"https://picsum.photos/200/307"},
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
