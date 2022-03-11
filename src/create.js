import { displayLog } from './utils';
import { from } from "rxjs";//la funcion from sirve para crear observables a partir de arrays

export default () => {
    /** start coding */
    
    /**** first example ******  TODO: comentar lineas por ejemplos**/ 
    /* const myArray = [1,2,3,4,5];
    const observable = from(myArray);
    const subspcription = observable.subscribe(val => displayLog(val));
     */


    /******* second example *********/
    /* const myString = "Hello World"
    const observable = from(myString);
    const subspcription = observable.subscribe(res => displayLog(res)); */
    

    /**** third example ****** Convert Promise in Observables **/
    const myString = "Hello World"
    const myPromise = new Promise(resolve => setTimeout(() => {
        resolve('hello World');
    },2000)) 
    const observable = from(myPromise);
    const subspcription =  observable.subscribe(res => displayLog(res));
    
    /* Promise: solo permiten emitir un evento
    Observable: flujo de datos completo */
    
    
    /** end coding */
}