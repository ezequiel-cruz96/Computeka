import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Store } from '../store/store';

import { MessageService } from 'primeng/api';

import { GetProductsService } from 'src/app/get-products.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css'],
})
export class DetailComponent {
  constructor(
    private rutaActiva: ActivatedRoute,
    private store: Store,
    private messageService: MessageService,
    private servicio: GetProductsService
  ) {}

  idParams: any = '';

  products: any = [];

  ngOnInit() {
    this.idParams = this.rutaActiva.snapshot.params['id'];

    this.servicio.obtenerDatos().subscribe(
      (data) => {
        this.products = data.body;
      },
      (error) => {
        console.error('Error al obtener datos', error);
      }
    );
  }

  /*   products: any = [
    {
      id: 1,
      name: 'Notebook Gamer Asus ROG Zephyrus G14 QHD 14 Ryzen 7 4800HS 16GB (2x8GB) 512GB SSD NVMe GTX 1650 W10 120Hz',
      images: './assets/images/notebook1.jpg',
      characteristics:
        'La notebook es una potente herramienta tecnológica portátil que combina un diseño delgado y elegante con un rendimiento excepcional. Equipada con un procesador de última generación y una pantalla de alta resolución, esta notebook es ideal para usuarios que buscan un equilibrio perfecto entre estilo y productividad',
      description:
        'Esta notebook está equipada con un amplio almacenamiento interno que te permite guardar una gran cantidad de archivos, desde documentos importantes hasta tu colección de música y películas. Con su generosa capacidad de almacenamiento, no tendrás que preocuparte por quedarte sin espacio en el disco duro.',
      link: '/productos/notebook1',
      price: 720400,
      code: 'SKU: GA401IHR-K2053T',
      detailImage: [
        { image: './assets/images/detail_1_2.jpg' },
        { image: './assets/images/detail_1_3.jpg' },
      ],
      count: 0,
      selected: false,
    },
    {
      id: 2,
      name: 'Notebook Lenovo ThinkPad E14 FHD 14 Ryzen 7 5700U 8GB 256GB SSD NVMe Freedos',
      images: './assets/images/notebook2.jpg',
      characteristics:
        'Esta notebook es una máquina versátil que se adapta a múltiples necesidades, desde la toma de apuntes en el aula hasta la edición de fotos y videos en casa. Su diseño compacto y ligero la convierte en la compañera perfecta para aquellos que están en constante movimiento, mientras que su batería de larga duración garantiza una productividad ininterrumpida.',
      description:
        'La notebook es una solución de almacenamiento ultrarrápida gracias a su unidad de estado sólido (SSD) de alta velocidad. Con esta tecnología, tus aplicaciones se cargarán en cuestión de segundos, y podrás acceder a tus archivos de manera eficiente,lo que la convierte en una opción ideal para usuarios que valoran la velocidad y el rendimiento.',
      price: 52135,
      code: 'SKU: GA401IHR-K2053T',
      detailImage: [
        { image: './assets/images/detail_2_1.jpg' },
        { image: './assets/images/detail_2_2.jpg' },
        { image: './assets/images/detail_2_3.jpg' },
      ],
      count: 0,
      selected: false,
    },
    {
      id: 3,
      name: 'Notebook ASUS X515EA 15.6 FHD Core I3 1115G4 4GB 256GB SSD NVMe Freedos',
      images: './assets/images/notebook3.jpg',
      characteristics:
        'La notebook es una herramienta esencial para profesionales y creativos que exigen un rendimiento excepcional. Con un potente procesador y una tarjeta gráfica de alto rendimiento, notebook permite ejecutar aplicaciones intensivas y realizar tareas exigentes con facilidad. Su pantalla de alta definición ofrece una experiencia visual envolvente.',
      description:
        'Si eres un amante de la fotografía o el diseño gráfico, esta notebook te ofrece un generoso espacio de almacenamiento en su unidad de disco duro, ideal para guardar tus archivos de alta resolución. Ya no tendrás que preocuparte por la capacidad de almacenamiento cuando captures imágenes o trabajes en proyectos creativos.',
      price: 85695,
      code: 'SKU: GA401IHR-K2053T',
      detailImage: [
        { image: './assets/images/detail_3_1.jpg' },
        { image: './assets/images/detail_3_2.jpg' },
      ],
      count: 0,
      selected: false,
    },
    {
      id: 4,
      name: 'Notebook Asus Vivobook M3500 OLED FHD 15.6 Ryzen 5 5600H 8GB 512GB SSD NVMe W11 Home',
      images: './assets/images/notebook4.jpg',
      characteristics:
        'Si buscas una notebook que ofrezca una experiencia de entretenimiento inigualable, esta es la elección perfecta. Con una pantalla vibrante y un sistema de audio de alta calidad, esta notebook te sumerge en películas, juegos y contenido multimedia. Además, su conectividad avanzada te permite disfrutar de una amplia gama de entretenimiento en línea.',
      description:
        'La notebook se destaca por su versatilidad de almacenamiento, ya que combina tanto un disco duro tradicional de gran capacidad como una unidad SSD rápida para un rendimiento óptimo. Esto significa que puedes almacenar tus archivos pesados en el disco duro y mantener tus aplicaciones y archivos de acceso frecuente en el SSD, brindándote un equilibrio perfecto entre capacidad y velocidad.',
      price: 68452,
      code: 'SKU: GA401IHR-K2053T',
      detailImage: [
        { image: './assets/images/detail_4_1.jpg' },
        { image: './assets/images/detail_4_2.jpg' },
        { image: './assets/images/detail_4_3.jpg' },
      ],
      count: 0,
      selected: false,
    },
    {
      id: 5,
      name: 'Notebook Gamer Acer Nitro 5 15.6 FHD Core i5 11400H 8GB 256GB SSD NVMe GTX 1650 W11 144Hz GAME PASS ULTIMATE 1 MONTH',
      images: './assets/images/notebook5.jpg',
      characteristics: '',
      description: '',
      price: 730000,
      code: 'SKU: NH.QEKAL.00CT',
      detailImage: [
        { image: './assets/images/detail_5_1.jpg' },
        { image: './assets/images/detail_5_2.jpg' },
      ],
      count: 0,
      selected: false,
    },
    {
      id: 6,
      name: 'Procesador AMD Ryzen 9 7950X 5.7GHz AM5 - No incluye Cooler - C/Video ',
      images: './assets/images/Procesador.jpg',
      characteristics: '',
      description: '',
      price: 627200,
      code: 'SKU: 100-100000514WOF',
      detailImage: [
        { image: './assets/images/detail_6_1.jpg' },
        { image: './assets/images/detail_6_2.jpg' },
      ],
      count: 0,
      selected: false,
    },
    {
      id: 7,
      name: 'Procesador Intel Core i3 10105F 4.4GHz Turbo Socket 1200 Comet Lake',
      images: './assets/images/Procesador2.jpg',
      characteristics: '',
      description: '',
      price: 79500,
      code: 'P/N: BX8070110105F',
      detailImage: [{ image: './assets/images/detail_7_1.jpg' }],
      count: 0,
      selected: false,
    },
    {
      id: 8,
      name: 'Fuente Seasonic 850W 80 Plus Gold Focus GX-850',
      images: './assets/images/Fuente.jpg',
      characteristics: '',
      description: '',
      price: 120950,
      code: 'SKU: SSR-850FX',
      detailImage: [
        { image: './assets/images/detail_8_1.jpg' },
        { image: './assets/images/detail_8_2.jpg' },
      ],
      count: 0,
      selected: false,
    },
    {
      id: 9,
      name: 'Placa de Video ASUS GeForce RTX 4070 Ti 12GB GDDR6X ROG STRIX OC',
      images: './assets/images/Grafica.jpg',
      characteristics: '',
      description: '',
      price: 944950,
      code: 'SKU: ROG-STRIX-RTX4070TI-O12G-GAMING',
      detailImage: [
        { image: './assets/images/detail_9_1.jpg' },
        { image: './assets/images/detail_9_2.jpg' },
      ],
      count: 0,
      selected: false,
    },
    {
      id: 10,
      name: 'Placa de Video ASUS GeForce RTX 3060 12GB GDDR6 DUAL Gaming V2 OC',
      images: './assets/images/Grafica2.jpg',
      characteristics: '',
      description: '',
      price: 517180,
      code: 'SKU: DUAL-RTX3060-O12G-V2',
      detailImage: [
        { image: './assets/images/detail_10_1.jpg' },
        { image: './assets/images/detail_10_2.jpg' },
      ],
      count: 0,
      selected: false,
    },
    {
      id: 11,
      name: 'Mother MSI X670-P PRO WIFI AM5',
      images: './assets/images/Mother.jpg',
      characteristics: '',
      description: '',
      price: 374900,
      code: 'UPC: 824142299265',
      detailImage: [
        { image: './assets/images/detail_11_1.jpg' },
        { image: './assets/images/detail_11_2.jpg' },
      ],
      count: 0,
      selected: false,
    },
    {
      id: 12,
      name: 'Mother ASUS PRIME H610M-K DDR4',
      images: './assets/images/Mother2.jpg',
      characteristics: '',
      description: '',
      price: 85900,
      code: 'SKU: PRIME H610M-K D4',
      detailImage: [
        { image: './assets/images/detail_12_1.jpg' },
        { image: './assets/images/detail_12_2.jpg' },
      ],
      count: 0,
      selected: false,
    },
    {
      id: 13,
      name: 'Disco Sólido SSD Kingston 480GB A400 500MB/s',
      images: './assets/images/Ssd.jpg',
      characteristics: '',
      description: '',
      price: 31500,
      code: 'SKU: SA400S37/480G',
      detailImage: [{ image: './assets/images/detail_13_1.jpg' }],
      count: 0,
      selected: false,
    },
    {
      id: 14,
      name: 'Disco Sólido SSD Gigabyte 240GB 500MB/s',
      images: './assets/images/Ssd2.jpg',
      characteristics: '',
      description: '',
      price: 18600,
      code: 'SKU: GP-GSTFS31240GNTD',
      detailImage: [
        { image: './assets/images/detail_14_1.jpg' },
        { image: './assets/images/detail_14_2.jpg' },
      ],
      count: 0,
      selected: false,
    },
    {
      id: 15,
      name: 'Monitor Gamer LG 27 27UL500-W UHD 4K HDR10 IPS',
      images: './assets/images/Monitor.jpg',
      characteristics: '',
      description: '',
      price: 322420,
      code: 'SKU: 27UL500-W',
      detailImage: [
        { image: './assets/images/detail_15_1.jpg' },
        { image: './assets/images/detail_15_2.jpg' },
      ],
      count: 0,
      selected: false,
    },
    {
      id: 16,
      name: 'Monitor Gamer Samsung 32 G5 Odyssey Curvo 165Hz 2K QHD',
      images: './assets/images/Monitor2.jpg',
      characteristics: '',
      description: '',
      price: 322420,
      code: 'SKU: LS32AG550ELXZB',
      detailImage: [
        { image: './assets/images/detail_16_1.jpg' },
        { image: './assets/images/detail_16_2.jpg' },
      ],
      count: 0,
      selected: false,
    },
    {
      id: 17,
      name: 'Memoria Corsair DDR4 16GB (2x8GB) 2666MHz Vengeance RGB PRO White ',
      images: './assets/images/Ram.jpg',
      characteristics: '',
      description: '',
      price: 58400,
      code: 'SKU: CMW16GX4M2A2666C16W',
      detailImage: [{ image: './assets/images/Ram.jpg' }],
      count: 0,
      selected: false,
    },

    {
      id: 18,
      name: 'Memoria Team DDR4 8GB 3600MHz T-Force Delta RGB Black CL18',
      images: './assets/images/Ram2.jpg',
      characteristics: '',
      description: '',
      price: 30850,
      code: 'SKU: TF3D48G3600HC18J01',
      detailImage: [{ image: './assets/images/Ram2.jpg' }],
      count: 0,
      selected: false,
    },
    {
      id: 19,
      name: 'Teclado Mecanico Redragon Kumara K552-KR Rainbow Outemu RED ESP',
      images: './assets/images/Teclado.jpg',
      characteristics: '',
      description: '',
      price: 28000,
      code: 'EAN: 6950376704962',
      detailImage: [
        { image: './assets/images/detail_19_1.jpg' },
        { image: './assets/images/detail_19_2.jpg' },
      ],
      count: 0,
      selected: false,
    },
    {
      id: 20,
      name: 'Teclado Mecanico Redragon Horus K621 TKL RGB Wireless White Switch Red',
      images: './assets/images/Teclado2.jpg',
      characteristics: '',
      description: '',
      price: 44990,
      code: 'SKU: K621W-RGB-SP',
      detailImage: [
        { image: './assets/images/detail_20_1.jpg' },
        { image: './assets/images/detail_20_2.jpg' },
      ],
      count: 0,
      selected: false,
    },
    {
      id: 21,
      name: 'Mouse Redragon STORM PRO M808-KS White Wireless',
      images: './assets/images/Mouse.jpg',
      characteristics: '',
      description: '',
      price: 24900,
      code: 'SKU: M808-KSW',
      detailImage: [
        { image: './assets/images/detail_21_1.jpg' },
        { image: './assets/images/detail_21_2.jpg' },
      ],
      count: 0,
      selected: false,
    },

    {
      id: 22,
      name: 'Mouse Logitech G502 Gaming Hero High Performance KDA RGB',
      images: './assets/images/Mouse2.jpg',
      characteristics: '',
      description: '',
      price: 44450,
      code: 'SKU: 910-006096',
      detailImage: [
        { image: './assets/images/detail_22_1.jpg' },
        { image: './assets/images/detail_22_2.jpg' },
      ],
      count: 0,
      selected: false,
    },
  ]; */

  get filterProducts(): any {
    return this.products.filter(
      (item: { id: any }) => item.id == this.idParams
    );
  }

  formatedPrice(price: any) {
    return price.toLocaleString('es-ES', {
      style: 'currency',
      currency: 'ARS',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    });
  }

  roundPrice(price: any) {
    let quotas = Math.round(price / 12);
    return quotas.toLocaleString('es-ES', {
      style: 'currency',
      currency: 'ARS',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    });
  }

  addToCart(product: any) {
    this.store.addToCart(product);
    this.messageService.add({
      severity: 'success',
      summary: '',
      detail: 'Producto agregado al carrito',
    });
  }

  items = this.store.getItems();

  get hasProduct() {
    return this.items.find((producto) => producto.id == this.idParams);
  }

  get TitleButton() {
    return !this.hasProduct
      ? 'Agregar a carrito'
      : 'Producto Agregado al carrito';
  }
}
