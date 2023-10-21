import { Component } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent {
  constructor(private rutaActiva: ActivatedRoute) { }

  idParams:any=''

  ngOnInit() {
    this.idParams = this.rutaActiva.snapshot.params["id"]
    console.log( this.idParams)
  }
}
