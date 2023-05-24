import { Component, OnInit } from '@angular/core';
import { FlatTreeControl } from '@angular/cdk/tree';
import { MatTreeFlatDataSource, MatTreeFlattener } from '@angular/material/tree';
import { Router } from '@angular/router';
import { ProductService } from '../services/product.service';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { CartItem, CartService } from '../services/cart.service';


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
      this.products = res;
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