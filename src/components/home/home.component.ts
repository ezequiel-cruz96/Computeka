import { Component,inject } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

products:any=[
  {
    images:'./assets/images/notebook1.jpg',
    characteristics:"La notebook es una potente herramienta tecnológica portátil que combina un diseño delgado y elegante con un rendimiento excepcional. Equipada con un procesador de última generación y una pantalla de alta resolución, esta notebook es ideal para usuarios que buscan un equilibrio perfecto entre estilo y productividad",
    description:'Esta notebook está equipada con un amplio almacenamiento interno que te permite guardar una gran cantidad de archivos, desde documentos importantes hasta tu colección de música y películas. Con su generosa capacidad de almacenamiento, no tendrás que preocuparte por quedarte sin espacio en el disco duro.'
  },
  {
    images:'./assets/images/notebook2.jpg',
    characteristics:"Esta notebook es una máquina versátil que se adapta a múltiples necesidades, desde la toma de apuntes en el aula hasta la edición de fotos y videos en casa. Su diseño compacto y ligero la convierte en la compañera perfecta para aquellos que están en constante movimiento, mientras que su batería de larga duración garantiza una productividad ininterrumpida.",
    description:'La notebook es una solución de almacenamiento ultrarrápida gracias a su unidad de estado sólido (SSD) de alta velocidad. Con esta tecnología, tus aplicaciones se cargarán en cuestión de segundos, y podrás acceder a tus archivos de manera eficiente,lo que la convierte en una opción ideal para usuarios que valoran la velocidad y el rendimiento.'
  }
  ,
  {
    images:'./assets/images/notebook3.jpg',
    characteristics:"La notebook es una herramienta esencial para profesionales y creativos que exigen un rendimiento excepcional. Con un potente procesador y una tarjeta gráfica de alto rendimiento, notebook permite ejecutar aplicaciones intensivas y realizar tareas exigentes con facilidad. Su pantalla de alta definición ofrece una experiencia visual envolvente.",
    description:"Si eres un amante de la fotografía o el diseño gráfico, esta notebook te ofrece un generoso espacio de almacenamiento en su unidad de disco duro, ideal para guardar tus archivos de alta resolución. Ya no tendrás que preocuparte por la capacidad de almacenamiento cuando captures imágenes o trabajes en proyectos creativos."
  }
  ,
  {
    images:'./assets/images/notebook4.jpg',
    characteristics:"Si buscas una notebook que ofrezca una experiencia de entretenimiento inigualable, esta es la elección perfecta. Con una pantalla vibrante y un sistema de audio de alta calidad, esta notebook te sumerge en películas, juegos y contenido multimedia. Además, su conectividad avanzada te permite disfrutar de una amplia gama de entretenimiento en línea.",
    description:"La notebook se destaca por su versatilidad de almacenamiento, ya que combina tanto un disco duro tradicional de gran capacidad como una unidad SSD rápida para un rendimiento óptimo. Esto significa que puedes almacenar tus archivos pesados en el disco duro y mantener tus aplicaciones y archivos de acceso frecuente en el SSD, brindándote un equilibrio perfecto entre capacidad y velocidad."
  }
]

}
