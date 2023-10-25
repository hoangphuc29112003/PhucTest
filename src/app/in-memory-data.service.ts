import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { products, } from './products';
import { Catagories } from './catagories';
import { brand } from './brand';


@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const products = [
      { id: 1, name: 'Accesories Shoes',img:'../assets/images/1.png',description:'Mask 95 Percent 0.3-Mm Particles' ,price:1000,pricesSales:500,sale:50,quantitys:100,content:'Rorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.',catagories:'Accessories',brands:{id:'',name:''},color:''},
      { id: 2, name: 'Accesories Shoes',img:'../assets/images/2.png',description:'Mask 95 Percent 0.3-Mm Particles' ,price:1000,pricesSales:400,sale:50,quantitys:100,content:'Rorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.',catagories:'Accessories',brands:'hewaui Galaxy',color:''},
      { id: 3, name: 'Accesories Shoes',img:'../assets/images/3.png',description:'Mask 95 Percent 0.3-Mm Particles' ,price:1000,pricesSales:300,sale:50,quantitys:100,content:'Rorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.',catagories:'Frame Sunglasses',brands:'Ryzen 3600',color:''},
      { id: 4, name: 'Accesories Shoes',img:'../assets/images/4.png',description:'Mask 95 Percent 0.3-Mm Particles' ,price:1000,pricesSales:100,sale:50,quantitys:100,content:'Rorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.',catagories:'Electornics',brands:'Samsung',color:''},
      { id: 5, name: 'Accesories Shoes',img:'../assets/images/5.png',description:'Mask 95 Percent 0.3-Mm Particles' ,price:1000,pricesSales:300,sale:50,quantitys:100,content:'Rorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.',catagories:'Cosmetics',brands:'hewaui Galaxy',color:''},
      { id: 6, name: 'Accesories Shoes',img:'../assets/images/6.png',description:'Mask 95 Percent 0.3-Mm Particles' ,price:1000,pricesSales:560,sale:50,quantitys:100,content:'Rorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.',catagories:'Computer',brands:'Ryzen 3600',color:''},
      { id: 7, name: 'Accesories Shoes',img:'../assets/images/7.png',description:'Mask 95 Percent 0.3-Mm Particles' ,price:1000,pricesSales:200,sale:50,quantitys:100,content:'Rorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.',catagories:'Brake Parts names ',brands:'intel',color:''},
      { id: 8, name: 'Accesories Shoes',img:'../assets/images/8.png',description:'Mask 95 Percent 0.3-Mm Particles' ,price:1000,pricesSales:230,sale:50,quantitys:100,content:'Rorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.',catagories:'Body Engine ',brands:'Oppo',color:''},
      { id: 9, name: 'Accesories Shoes',img:'../assets/images/1.png',description:'Mask 95 Percent 0.3-Mm Particles' ,price:1000,pricesSales:430,sale:50,quantitys:100,content:'Rorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.',catagories:'Air Filter',brands:'Samsung',color:''},
      { id: 10, name: 'Accesories Shoes',img:'../assets/images/2.png',description:'Mask 95 Percent 0.3-Mm Particles' ,price:1000,pricesSales:340,sale:50,quantitys:100,content:'Rorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.',catagories:'Frame Sunglasses',brands:'hewaui Galaxy',color:''},
      { id: 11, name: 'Accesories Shoes',img:'../assets/images/3.png',description:'Mask 95 Percent 0.3-Mm Particles' ,price:1000,pricesSales:560,sale:50,quantitys:100,content:'Rorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.',catagories:'Electornics',brands:'Ryzen 3600',color:''},
      { id: 12, name: 'Accesories Shoes',img:'../assets/images/4.png',description:'Mask 95 Percent 0.3-Mm Particles' ,price:1000,pricesSales:170,sale:50,quantitys:100,content:'Rorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.',catagories:'Electornics',brands:'Samsung',color:''},
      { id: 13, name: 'Accesories Shoes',img:'../assets/images/5.png',description:'Mask 95 Percent 0.3-Mm Particles' ,price:1000,pricesSales:500,sale:50,quantitys:100,content:'Rorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.',catagories:'Body Engine',brands:'Oppo',color:''},
      { id: 14, name: 'Accesories Shoes',img:'../assets/images/6.png',description:'Mask 95 Percent 0.3-Mm Particles' ,price:1000,pricesSales:760,sale:50,quantitys:100,content:'Rorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.',catagories:'Body Engine',brands:'hewaui Galaxy',color:''},
      { id: 15, name: 'Accesories Shoes',img:'../assets/images/7.png',description:'Mask 95 Percent 0.3-Mm Particles' ,price:1000,pricesSales:340,sale:50,quantitys:100,content:'Rorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.',catagories:'Body Engine',brands:'Ryzen 3600',color:''},
      { id: 16, name: 'Accesories Shoes',img:'../assets/images/8.png',description:'Mask 95 Percent 0.3-Mm Particles' ,price:1000,pricesSales:540,sale:50,quantitys:100,content:'Rorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.',catagories:'Body Engine',brands:'Samsung',color:''},
      { id: 17, name: 'Accesories Shoes',img:'../assets/images/8.png',description:'Mask 95 Percent 0.3-Mm Particles' ,price:1000,pricesSales:140,sale:50,quantitys:100,content:'Rorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.',catagories:'Accessories',brands:'Ryzen 3600',color:''},
      { id: 18, name: 'Accesories Shoes',img:'../assets/images/4.png',description:'Mask 95 Percent 0.3-Mm Particles' ,price:1000,pricesSales:150,sale:50,quantitys:100,content:'Rorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.',catagories:'Accessories',brands:'intel',color:''},
      { id: 19, name: 'Accesories Shoes',img:'../assets/images/3.png',description:'Mask 95 Percent 0.3-Mm Particles' ,price:1000,pricesSales:160,sale:50,quantitys:100,content:'Rorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.',catagories:'Frame Sunglasses',brands:'',color:''},
      { id: 20, name: 'Accesories Shoes',img:'../assets/images/4.png',description:'Mask 95 Percent 0.3-Mm Particles' ,price:1000,pricesSales:500,sale:50,quantitys:100,content:'Rorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.',catagories:'Electornics',brands:'hewaui Galaxy',color:''},
      { id: 21, name: 'Accesories Shoes',img:'../assets/images/5.png',description:'Mask 95 Percent 0.3-Mm Particles' ,price:1000,pricesSales:420,sale:50,quantitys:100,content:'Rorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.',catagories:'Cosmetics',brands:'Oppo',color:''},
      // { id: 22, name: 'Accesories Shoes',img:'../assets/images/6.png',description:'Mask 95 Percent 0.3-Mm Particles' ,price:1000,pricesSales:500,sale:50,quantitys:100,content:'Rorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.',catagories:'Computer',brands:'Ryzen 3600',color:''},
      // { id: 23, name: 'Accesories Shoes',img:'../assets/images/7.png',description:'Mask 95 Percent 0.3-Mm Particles' ,price:1000,pricesSales:500,sale:50,quantitys:100,content:'Rorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.',catagories:'Brake Parts names ',brands:'intel',color:''},
      // { id: 24, name: 'Accesories Shoes',img:'../assets/images/8.png',description:'Mask 95 Percent 0.3-Mm Particles' ,price:1000,pricesSales:500,sale:50,quantitys:100,content:'Rorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.',catagories:'Body Engine ',brands:'Oppo',color:''},
      // { id: 25, name: 'Accesories Shoes',img:'../assets/images/1.png',description:'Mask 95 Percent 0.3-Mm Particles' ,price:1000,pricesSales:500,sale:50,quantitys:100,content:'Rorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.',catagories:'Air Filter',brands:'Ryzen 3600',color:''},
      // { id: 26, name: 'Accesories Shoes',img:'../assets/images/2.png',description:'Mask 95 Percent 0.3-Mm Particles' ,price:1000,pricesSales:500,sale:50,quantitys:100,content:'Rorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.',catagories:'Frame Sunglasses',brands:'',color:''},
      // { id: 27, name: 'Accesories Shoes',img:'../assets/images/3.png',description:'Mask 95 Percent 0.3-Mm Particles' ,price:1000,pricesSales:500,sale:50,quantitys:100,content:'Rorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.',catagories:'Electornics',brands:'Oppo',color:''},
      // { id: 28, name: 'Accesories Shoes',img:'../assets/images/4.png',description:'Mask 95 Percent 0.3-Mm Particles' ,price:1000,pricesSales:500,sale:50,quantitys:100,content:'Rorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.',catagories:'Electornics',brands:'intel',color:''},
      // { id: 29, name: 'Accesories Shoes',img:'../assets/images/5.png',description:'Mask 95 Percent 0.3-Mm Particles' ,price:1000,pricesSales:500,sale:50,quantitys:100,content:'Rorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.',catagories:'Body Engine',brands:'Oppo',color:''},
      // { id: 30, name: 'Accesories Shoes',img:'../assets/images/6.png',description:'Mask 95 Percent 0.3-Mm Particles' ,price:1000,pricesSales:500,sale:50,quantitys:100,content:'Rorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.',catagories:'Body Engine',brands:'intel',color:''},
      // { id: 31, name: 'Accesories Shoes',img:'../assets/images/7.png',description:'Mask 95 Percent 0.3-Mm Particles' ,price:1000,pricesSales:500,sale:50,quantitys:100,content:'Rorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.',catagories:'Body Engine',brands:'hewaui Galaxy',color:''},
      // { id: 32, name: 'Accesories Shoes',img:'../assets/images/8.png',description:'Mask 95 Percent 0.3-Mm Particles' ,price:1000,pricesSales:500,sale:50,quantitys:100,content:'Rorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.',catagories:'Body Engine',brands:'Oppo',color:''},




    ];
    const Catagories = [
      {
        id: 1,
        cataname:'Accessories',

      },
      {
        id: 2,
        cataname:'Air Filter',

      },
      {
        id: 3,
        cataname:'Body Engine',

      },
      {
        id: 4,
        cataname:'Brake Parts names',

      },
      {
        id: 5,
        cataname:'Computer',

      },
      {
        id: 6,
        cataname:'Cosmetics',

      },
      {
        id: 7,
        cataname:'Covid-19',

      },
      {
        id: 8,
        cataname:'Electornics',

      },
      {
        id: 9,
        cataname:'Frame Sunglasses',

      },
      {
        id: 10,
        cataname:'Furniture',

      },
    ];

    const brands = [
      {id:'1', brand :'Samsung'  },
      {id:'2', brand :'Oppo'  },
      {id:'3', brand :'hewaui Galaxy'  },
      {id:'4', brand :'Ryzen 3600'  },
      {id:'5', brand :'intel'  },
      {id:'6', brand :'Mobile Handset'  },
  ]

    return {products,Catagories,brands};
  }



  // creatDB2(){

  //   return {Catagories}
  // }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(products: products[],Catagories: Catagories[],brands: brand[]): number {
    return products.length > 0 ? Math.max(...products.map(hero => hero.id)) + 1 : 11,
    Catagories.length > 0 ? Math.max(...Catagories.map(hero1 => hero1.id)) + 1 : 11,
   brands.length > 0 ? Math.max(...brands.map(hero2 => hero2.id)) + 1 : 11;
  }
  }
  // genId2(Catagories: Catagories[]): number {
  //   return Catagories.length > 0 ? Math.max(...Catagories.map(hero => hero.id)) + 1 : 11;
  // }

