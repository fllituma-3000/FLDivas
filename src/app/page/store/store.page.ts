import { Component, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonButton,
  IonButtons,
  IonBackButton,
  IonIcon,
  IonSearchbar,
  IonChip,
  IonLabel,
  IonBadge,
  IonFab,
  IonFabButton
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import {
  cartOutline,
  heartOutline,
  heart,
  star,
  starOutline,
  swapVerticalOutline,
  gridOutline,
  listOutline,
  searchOutline,
  arrowUp,
  eyeOutline,
  checkmarkCircleOutline,
  shieldCheckmarkOutline,
  refreshOutline,
  rocketOutline,
  appsOutline,
  optionsOutline
} from 'ionicons/icons';

interface Categoria {
  id: string;
  nombre: string;
}

interface Producto {
  id: number;
  nombre: string;
  precio: number;
  precioAnterior?: number;
  imagen: string;
  categoria: string;
  descripcion?: string;
  descuento?: number;
  rating?: number;
  esFavorito?: boolean;
  stock?: number;
  nuevo?: boolean;
}

@Component({
  selector: 'app-store',
  templateUrl: './store.page.html',
  styleUrls: ['./store.page.scss'],
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
    IonBackButton,
    IonIcon,
    IonSearchbar,
    IonChip,
    IonLabel,
    IonBadge,
    IonFab,
    IonFabButton
  ]
})
export class StorePage implements OnInit {
  @ViewChild(IonContent) content!: IonContent;

  categorias: Categoria[] = [];
  productos: Producto[] = [];
  productosFiltrados: Producto[] = [];
  
  busqueda: string = '';
  categoriaSeleccionada: string = 'todas';
  ordenActual: string = 'Relevancia';
  vistaGrid: boolean = true;
  itemsCarrito: number = 0;
  itemsFavoritos: number = 0;
  mostrarBotonTop: boolean = false;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {
    addIcons({
      cartOutline,
      heartOutline,
      heart,
      star,
      starOutline,
      swapVerticalOutline,
      gridOutline,
      listOutline,
      searchOutline,
      arrowUp,
      eyeOutline,
      checkmarkCircleOutline,
      shieldCheckmarkOutline,
      refreshOutline,
      rocketOutline,
      appsOutline,
      optionsOutline
    });
  }

  ngOnInit() {
    this.cargarCategorias();
    this.cargarProductos();
    
    this.activatedRoute.queryParams.subscribe(params => {
      if (params['categoria']) {
        this.categoriaSeleccionada = params['categoria'];
        this.aplicarFiltros();
      }
      if (params['ofertas']) {
        this.filtrarOfertas();
      }
    });
  }

  cargarCategorias() {
    this.categorias = [
      { id: '1', nombre: 'VESTIDOS' },
      { id: '2', nombre: 'BLUSAS' },
      { id: '3', nombre: 'PANTALONES' },
      { id: '4', nombre: 'ZAPATOS' },
      { id: '5', nombre: 'ACCESORIOS' }
    ];
  }

  cargarProductos() {
    this.productos = [
      {
        id: 1,
        nombre: 'Vestido Negro Elegante',
        precio: 129.99,
        precioAnterior: 179.99,
        imagen: 'https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=500',
        categoria: 'Vestidos',
        descuento: 28,
        rating: 5,
        esFavorito: false,
        stock: 8,
        nuevo: true
      },
      {
        id: 2,
        nombre: 'Blusa de Seda Premium',
        precio: 89.99,
        imagen: 'https://images.unsplash.com/photo-1591369822096-ffd140ec948f?w=500',
        categoria: 'Blusas',
        rating: 4,
        esFavorito: false,
        stock: 15,
        nuevo: true
      },
      {
        id: 3,
        nombre: 'Pantalón de Vestir Negro',
        precio: 99.99,
        imagen: 'https://images.unsplash.com/photo-1594633313593-bab3825d0caf?w=500',
        categoria: 'Pantalones',
        rating: 5,
        esFavorito: false,
        stock: 12
      },
      {
        id: 4,
        nombre: 'Tacones Dorados Elegantes',
        precio: 149.99,
        precioAnterior: 199.99,
        imagen: 'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=500',
        categoria: 'Zapatos',
        descuento: 25,
        rating: 4,
        esFavorito: false,
        stock: 6
      },
      {
        id: 5,
        nombre: 'Vestido Rojo Cóctel',
        precio: 159.99,
        imagen: 'https://images.unsplash.com/photo-1566174053879-31528523f8ae?w=500',
        categoria: 'Vestidos',
        rating: 5,
        esFavorito: false,
        stock: 5,
        nuevo: true
      },
      {
        id: 6,
        nombre: 'Blusa Blanca Clásica',
        precio: 79.99,
        imagen: 'https://images.unsplash.com/photo-1618932260643-eee4a2f652a6?w=500',
        categoria: 'Blusas',
        rating: 4,
        esFavorito: false,
        stock: 20
      },
      {
        id: 7,
        nombre: 'Pantalón Casual Beige',
        precio: 85.99,
        imagen: 'https://images.unsplash.com/photo-1506629082955-511b1aa562c8?w=500',
        categoria: 'Pantalones',
        rating: 4,
        esFavorito: false,
        stock: 18
      },
      {
        id: 8,
        nombre: 'Bolso de Cuero Premium',
        precio: 189.99,
        precioAnterior: 249.99,
        imagen: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=500',
        categoria: 'Accesorios',
        descuento: 24,
        rating: 5,
        esFavorito: false,
        stock: 10
      },
      {
        id: 9,
        nombre: 'Zapatos Nude Stiletto',
        precio: 119.99,
        imagen: 'https://images.unsplash.com/photo-1535043934128-cf0b28d52f95?w=500',
        categoria: 'Zapatos',
        rating: 4,
        esFavorito: false,
        stock: 14,
        nuevo: true
      },
      {
        id: 10,
        nombre: 'Vestido Azul Noche',
        precio: 139.99,
        imagen: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=500',
        categoria: 'Vestidos',
        rating: 5,
        esFavorito: false,
        stock: 7
      },
      {
        id: 11,
        nombre: 'Blusa Satinada Dorada',
        precio: 95.99,
        precioAnterior: 125.99,
        imagen: 'https://images.unsplash.com/photo-1564859228273-274232fdb516?w=500',
        categoria: 'Blusas',
        descuento: 24,
        rating: 4,
        esFavorito: false,
        stock: 11
      },
      {
        id: 12,
        nombre: 'Pantalón Acampanado',
        precio: 109.99,
        imagen: 'https://images.unsplash.com/photo-1517438476312-10d79c077509?w=500',
        categoria: 'Pantalones',
        rating: 4,
        esFavorito: false,
        stock: 16
      },
      {
        id: 13,
        nombre: 'Collar de Perlas',
        precio: 199.99,
        imagen: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=500',
        categoria: 'Accesorios',
        rating: 5,
        esFavorito: false,
        stock: 9,
        nuevo: true
      },
      {
        id: 14,
        nombre: 'Botines Negros',
        precio: 129.99,
        precioAnterior: 169.99,
        imagen: 'https://images.unsplash.com/photo-1608256246200-53e635b5b65f?w=500',
        categoria: 'Zapatos',
        descuento: 24,
        rating: 5,
        esFavorito: false,
        stock: 13
      },
      {
        id: 15,
        nombre: 'Vestido Floral Primavera',
        precio: 115.99,
        imagen: 'https://images.unsplash.com/photo-1612423284934-2850a4ea6b0f?w=500',
        categoria: 'Vestidos',
        rating: 4,
        esFavorito: false,
        stock: 19
      },
      {
        id: 16,
        nombre: 'Blusa Off-Shoulder',
        precio: 69.99,
        imagen: 'https://images.unsplash.com/photo-1583496661160-fb5886a0aaaa?w=500',
        categoria: 'Blusas',
        rating: 4,
        esFavorito: false,
        stock: 22
      }
    ];

    this.productosFiltrados = [...this.productos];
  }

  buscarProductos() {
    this.aplicarFiltros();
  }

  filtrarPorCategoria(categoriaId: string) {
    this.categoriaSeleccionada = categoriaId;
    this.aplicarFiltros();
  }

  aplicarFiltros() {
    let resultados = [...this.productos];

    if (this.categoriaSeleccionada !== 'todas') {
      const categoriaNombre = this.categorias.find(c => c.id === this.categoriaSeleccionada)?.nombre;
      resultados = resultados.filter(p => p.categoria === categoriaNombre);
    }

    if (this.busqueda && this.busqueda.trim() !== '') {
      const busquedaLower = this.busqueda.toLowerCase();
      resultados = resultados.filter(p => 
        p.nombre.toLowerCase().includes(busquedaLower) ||
        p.categoria.toLowerCase().includes(busquedaLower)
      );
    }

    this.productosFiltrados = resultados;
  }

  filtrarOfertas() {
    this.productosFiltrados = this.productos.filter(p => p.descuento && p.descuento > 0);
  }

  cambiarOrden() {
    const ordenes = ['Relevancia', 'Precio: Menor a Mayor', 'Precio: Mayor a Menor', 'Mejor Valorados', 'Nuevos'];
    const indiceActual = ordenes.indexOf(this.ordenActual);
    const siguienteIndice = (indiceActual + 1) % ordenes.length;
    this.ordenActual = ordenes[siguienteIndice];

    switch (this.ordenActual) {
      case 'Precio: Menor a Mayor':
        this.productosFiltrados.sort((a, b) => a.precio - b.precio);
        break;
      case 'Precio: Mayor a Menor':
        this.productosFiltrados.sort((a, b) => b.precio - a.precio);
        break;
      case 'Mejor Valorados':
        this.productosFiltrados.sort((a, b) => (b.rating || 0) - (a.rating || 0));
        break;
      case 'Nuevos':
        this.productosFiltrados.sort((a, b) => (b.nuevo ? 1 : 0) - (a.nuevo ? 1 : 0));
        break;
      default:
        this.productosFiltrados = [...this.productos];
        this.aplicarFiltros();
    }
  }

  toggleVista() {
    this.vistaGrid = !this.vistaGrid;
  }

  toggleFavorito(event: Event, producto: Producto) {
    event.stopPropagation();
    producto.esFavorito = !producto.esFavorito;
    
    if (producto.esFavorito) {
      this.itemsFavoritos++;
    } else {
      this.itemsFavoritos--;
    }
  }

  agregarAlCarrito(event: Event, producto: Producto) {
    event.stopPropagation();
    this.itemsCarrito++;
    console.log('Producto agregado al carrito:', producto);
    // Aquí puedes agregar lógica de notificación
  }

  verDetalleProducto(producto: Producto) {
    console.log('Ver detalle del producto:', producto);
    // this.router.navigate(['/producto', producto.id]);
  }

  abrirCarrito() {
    console.log('Abrir carrito de compras');
    // this.router.navigate(['/carrito']);
  }

  abrirFiltros() {
    console.log('Abrir panel de filtros');
    // Aquí puedes abrir un modal con filtros avanzados
  }

  resetearFiltros() {
    this.busqueda = '';
    this.categoriaSeleccionada = 'todas';
    this.productosFiltrados = [...this.productos];
  }

  async scrollToTop() {
    await this.content.scrollToTop(500);
  }

  onScroll(event: any) {
    const scrollTop = event.detail.scrollTop;
    this.mostrarBotonTop = scrollTop > 400;
  }
}