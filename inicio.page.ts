import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonButton,
  IonButtons,
  IonIcon
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import {
  cartOutline,
  personOutline,
  searchOutline,
  heartOutline,
  heart,
  logoFacebook,
  logoInstagram,
  logoTiktok,
  logoTwitter,
  rocketOutline,
  shieldCheckmarkOutline,
  refreshOutline,
  headsetOutline,
  diamondOutline,
  star,
  starOutline,
  mailOutline,
  callOutline,
  locationOutline,
  cardOutline
} from 'ionicons/icons';

interface Categoria {
  id: number;
  nombre: string;
  imagen: string;
  cantidad: number;
}

interface Producto {
  id: number;
  nombre: string;
  precio: number;
  precioAnterior?: number;
  imagen: string;
  categoria: string;
  nuevo?: boolean;
  descuento?: number;
  rating?: number;
  esFavorito?: boolean;
}

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    IonButton,
    IonButtons,
    IonIcon
  ]
})
export class InicioPage implements OnInit {
  categorias: Categoria[] = [];
  productosDestacados: Producto[] = [];

  constructor(private router: Router) {
    addIcons({
      cartOutline,
      personOutline,
      searchOutline,
      heartOutline,
      heart,
      logoFacebook,
      logoInstagram,
      logoTiktok,
      logoTwitter,
      rocketOutline,
      shieldCheckmarkOutline,
      refreshOutline,
      headsetOutline,
      diamondOutline,
      star,
      starOutline,
      mailOutline,
      callOutline,
      locationOutline,
      cardOutline
    });
  }

  ngOnInit() {
    this.cargarCategorias();
    this.cargarProductosDestacados();
  }

  cargarCategorias() {
    this.categorias = [
      {
        id: 1,
        nombre: 'VESTIDOS',
        imagen: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=500',
        cantidad: 45
      },
      {
        id: 2,
        nombre: 'BLUSAS',
        imagen: 'https://images.unsplash.com/photo-1564859228273-274232fdb516?w=500',
        cantidad: 38
      },
      {
        id: 3,
        nombre: 'PANTALONES',
        imagen: 'https://images.unsplash.com/photo-1506629082955-511b1aa562c8?w=500',
        cantidad: 32
      },
      {
        id: 4,
        nombre: 'ZAPATOS',
        imagen: 'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=500',
        cantidad: 28
      },
      {
        id: 5,
        nombre: 'ACCESORIOS',
        imagen: 'https://images.unsplash.com/photo-1611652022419-a9419f74343d?w=500',
        cantidad: 52
      }
    ];
  }

  cargarProductosDestacados() {
    this.productosDestacados = [
      {
        id: 1,
        nombre: 'Vestido Negro Elegante',
        precio: 129.99,
        precioAnterior: 179.99,
        imagen: 'https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=500',
        categoria: 'Vestidos',
        nuevo: true,
        descuento: 28,
        rating: 5,
        esFavorito: false
      },
      {
        id: 2,
        nombre: 'Blusa de Seda Premium',
        precio: 89.99,
        imagen: 'https://images.unsplash.com/photo-1591369822096-ffd140ec948f?w=500',
        categoria: 'Blusas',
        nuevo: true,
        rating: 4,
        esFavorito: false
      },
      {
        id: 3,
        nombre: 'Pantalón de Vestir',
        precio: 99.99,
        imagen: 'https://images.unsplash.com/photo-1594633313593-bab3825d0caf?w=500',
        categoria: 'Pantalones',
        rating: 5,
        esFavorito: false
      },
      {
        id: 4,
        nombre: 'Tacones Dorados',
        precio: 149.99,
        precioAnterior: 199.99,
        imagen: 'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=500',
        categoria: 'Zapatos',
        descuento: 25,
        rating: 4,
        esFavorito: false
      },
      {
        id: 5,
        nombre: 'Vestido Rojo Cóctel',
        precio: 159.99,
        imagen: 'https://images.unsplash.com/photo-1566174053879-31528523f8ae?w=500',
        categoria: 'Vestidos',
        nuevo: true,
        rating: 5,
        esFavorito: false
      },
      {
        id: 6,
        nombre: 'Blusa Blanca Clásica',
        precio: 79.99,
        imagen: 'https://images.unsplash.com/photo-1618932260643-eee4a2f652a6?w=500',
        categoria: 'Blusas',
        rating: 4,
        esFavorito: false
      },
      {
        id: 7,
        nombre: 'Bolso de Cuero',
        precio: 189.99,
        precioAnterior: 249.99,
        imagen: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=500',
        categoria: 'Accesorios',
        descuento: 24,
        rating: 5,
        esFavorito: false
      },
      {
        id: 8,
        nombre: 'Zapatos Nude',
        precio: 119.99,
        imagen: 'https://images.unsplash.com/photo-1535043934128-cf0b28d52f95?w=500',
        categoria: 'Zapatos',
        nuevo: true,
        rating: 4,
        esFavorito: false
      }
    ];
  }

  navegarTienda() {
    this.router.navigate(['/store']);
  }

  seleccionarCategoria(categoria: Categoria) {
    this.router.navigate(['/store'], {
      queryParams: { categoria: categoria.id }
    });
  }

  verOfertas() {
    this.router.navigate(['/store'], {
      queryParams: { ofertas: true }
    });
  }

  toggleFavorito(event: Event, producto: Producto) {
    event.stopPropagation();
    producto.esFavorito = !producto.esFavorito;
  }

  verDetalleProducto(producto: Producto) {
    console.log('Ver detalle:', producto);
    // this.router.navigate(['/producto', producto.id]);
  }
}