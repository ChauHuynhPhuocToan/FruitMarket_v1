import { Component, OnInit } from '@angular/core';
import { FlatTreeControl } from '@angular/cdk/tree';
import { MatTreeFlatDataSource, MatTreeFlattener } from '@angular/material/tree';
import { Router } from '@angular/router';
import { ProductService } from '../services/product.service';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { CartItem } from '../services/model';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  carouselOptions: OwlOptions = 
  {
    items: 1, 
    loop: true,
    autoplay: true,
    center: true,
    dots: false,
    autoHeight: true,
    autoWidth: true,
    animateOut: 'fadeOut'
  }

  disabled = false;
  max = 100;
  min = 0;
  showTicks = false;
  step = 1;
  thumbLabel = false;
  value = 0;

  products: any[] = [];
  default = new Array(6);
  
  constructor(private router: Router, private productService: ProductService, private cartService: CartService) {
    this.dataSource.data = TREE_DATA;
    this.productService.getAllProducts().subscribe(res => {
      if(this.cartService.cart.items != null && this.cartService.cart.items.length > 0){
        res.forEach(x => {
          var index = this.cartService.cart.items.findIndex(i => i.id == x.id);
          this.products.push({
            id: x.id,
            image: x.image,
            text: x.text,
            price: x.price,
            quantity: index != -1 ? this.cartService.cart.items[index].quantity : 0
          });
        });
      } else {
        res.forEach(x => {
          this.products.push({
            id: x.id,
            image: x.image,
            text: x.text,
            price: x.price,
            quantity: 0
          });
        });
      }
    });
  }

  private _transformer = (node: FoodNode, level: number) => {
    return {
      expandable: !!node.children && node.children.length > 0,
      name: node.name,
      level: level,
    };
  }

  ngOnInit() {
  }

  treeControl = new FlatTreeControl<ExampleFlatNode>(node => node.level, node => node.expandable);

  treeFlattener = new MatTreeFlattener(this._transformer, node => node.level, node => node.expandable, node => node.children);

  dataSource = new MatTreeFlatDataSource(this.treeControl, this.treeFlattener);


  hasChild = (_: number, node: ExampleFlatNode) => node.expandable;
  
  productHome(id: string) {
    this.router.navigate(['../product', id]);
  }

  addToCart(item: CartItem) {
    this.cartService.addCart(item, this.cartService.cart);
    this.updateQuantityItem(item.id);
  }

  increaseQuantity(item: any){
    this.cartService.cart = this.cartService.addCart(item, this.cartService.cart);
    this.updateQuantityItem(item.id);
  }

  descreaseQuantity(item: any){
    this.cartService.cart = this.cartService.decreaseCartQuantity(item, this.cartService.cart);
    this.updateQuantityItem(item.id);
  }

  updateCartItemQuantity(event: any, item: any) {
    this.cartService.cart = this.cartService.updateCartItem(item, this.cartService.cart, event.target.value);
    this.updateQuantityItem(item.id);
  }

  updateQuantityItem(id: string) {
    var index = this.products.findIndex(x => x.id == id);
    var itemIndex = this.cartService.cart.items.findIndex(x => x.id == id);
    this.products[index].quantity = itemIndex != -1 ? this.cartService.cart.items[itemIndex].quantity : 0;
    this.products = [...this.products];
  }

}



/**
 * Food data with nested structure.
 * Each node has a name and an optiona list of children.
 */
interface FoodNode {
  name: string;
  children?: FoodNode[];
}

const TREE_DATA: FoodNode[] = [
  {
    name: 'Apple',
    children: [
      {name: 'Kashmiri Apple'},
      {name: 'Fuji Apple'},
      {name: 'Empire Apple'},
    ]
  }, {
    name: 'Banana',
    children: [
      {name: 'Chingan banana'},
      {name: 'Lacatan banana'},
      {name: 'Lady Finger banana (Sugar banana)'},
    ]
  },{
    name: 'Mango',
    children: [
      {name: 'Alampur Baneshan'},
      {name: 'Alphonso'},
      {name: 'Amrapali'},
    ]
  },
];

/** Flat node with expandable and level information */
interface ExampleFlatNode {
  expandable: boolean;
  name: string;
  level: number;
}