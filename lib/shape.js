"use strict"
global.shape={};

module.exports = class Shape {
  constructor(options){
/**
 * Paquete npm de Shape
 * 
 * https://github.com/ULL-ESIT-DSI-1617/creacion-de-paquetes-npm-andrea-carlos-35l1-p5
 * 
 * Autores: Andrea Rodríguez Rivarés y Carlos Castro García
 *  
 * Paquete npm con la clase Shape.
 *
 * @class Shape
 * @param {hash} options Ancho
 */
    this.options = options
  }
  
/**
* @function calcular
* @return {number} devuelve el área del círculo
*/
  getArea(){
    console.log(this.constructor);
    var geom = new global.shape[this.constructor](this.options)
    return geom.calcular();
  }
}
