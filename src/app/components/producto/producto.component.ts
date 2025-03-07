import { Component } from '@angular/core';


@Component({
  selector: 'app-producto',
  imports: [],
  templateUrl: './producto.component.html',
  styleUrl: './producto.component.css'
})
export class ProductoComponent {
 productos: Producto[]=[];

 agregarProducto(descripcion: string, precio: number): void{
  if(descripcion && precio){
    this.productos.push(new Producto(descripcion, precio));
  }
 }
 
};

export class Producto{
  constructor(
    public descripcion: string,
    public precio: number
  ){};


};
