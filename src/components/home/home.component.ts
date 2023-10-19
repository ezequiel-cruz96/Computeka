import { Component,inject } from '@angular/core';
import { Firestore, doc, getDoc,getFirestore,updateDoc } from '@angular/fire/firestore';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  products :any =[]

  firestore: Firestore = inject(Firestore);
  
  ngOnInit() {
    this.getCollection() 
  }

  async getCollection(){
    const db = getFirestore();
    const docRef = doc(db, "Componentes", "componentes");
    const docSnap = await getDoc(docRef);
    docSnap.data();
      try {
        const docSnap = await getDoc(docRef);
        let datos :any = docSnap.data()
        this.products = datos.componentes
      } 
      catch(error) {
        console.log('termino')
      }
    }

     escribir(){
      const db = getFirestore();
      const productsList = doc(db, "Componentes", "componentes");
      let newProduct = {
        id: '1' ,
        computadora: "pc master race",
      }
      this.products.push(newProduct)
      const data = {
        componentes:this.products
      };  
      updateDoc(productsList, data)
      .then(results => {
        console.log(results)
        })
      .catch(error => {
        console.log("error")
      })
    }
}
