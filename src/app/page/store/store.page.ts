import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonGrid, IonRow, IonCol, IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonCardSubtitle, IonButton, IonIcon } from '@ionic/angular/standalone';

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  description: string;
  category: string;
}

@Component({
  selector: 'app-store',
  templateUrl: './store.page.html',
  styleUrls: ['./store.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, IonGrid, IonRow, IonCol, IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonCardSubtitle, IonButton, IonIcon, CommonModule, FormsModule]
})
export class StorePage implements OnInit {

  products: Product[] = [
    {
      id: 1,
      name: 'Vestido Elegante Azul Marino',
      price: 45.99,
      image: 'assets/images/dress1.jpg',
      description: 'Vestido azul marino elegante perfecto para ocasiones especiales.',
      category: 'Vestidos'
    },
    {
      id: 2,
      name: 'Blusa Verde Oliva Moderna',
      price: 25.99,
      image: 'assets/images/blouse1.jpg',
      description: 'Blusa verde oliva con diseño moderno y cómodo.',
      category: 'Blusas'
    },
    {
      id: 3,
      name: 'Jeans Clásicos Azules',
      price: 35.99,
      image: 'assets/images/jeans1.jpg',
      description: 'Jeans azules clásicos de alta calidad.',
      category: 'Pantalones'
    },
    {
      id: 4,
      name: 'Chaqueta Impermeable de Cuero',
      price: 89.99,
      image: 'assets/images/jacket1.jpg',
      description: 'Chaqueta de cuero genuino, estilo y durabilidad.',
      category: 'Chaquetas'
    },
    {
      id: 5,
      name: 'Falda Plisada Negra',
      price: 29.99,
      image: 'assets/images/skirt1.jpg',
      description: 'Falda plisada negra ideal para el día a día.',
      category: 'Faldas'
    },
    {
      id: 6,
      name: 'Camisa Formal Negra',
      price: 32.99,
      image: 'assets/images/shirt1.jpg',
      description: 'Camisa formal negra para ocasiones profesionales.',
      category: 'Camisas'
    },
    {
      id: 7,
      name: 'Vestido de Verano Floral',
      price: 39.99,
      image: 'assets/images/dress2.jpeg',
      description: 'Vestido floral perfecto para el verano.',
      category: 'Vestidos'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

  addToCart(product: Product) {
    // TODO: Implement cart functionality
    console.log('Added to cart:', product.name);
  }

}
